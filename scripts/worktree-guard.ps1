param(
  [Parameter(Position=0)][ValidateSet('review','adopt','recover','start','checkpoint','hook')][string]$Action='review',
  [string]$Session, [string]$Turn, [string]$Review, [string]$ConfirmInactive, [string]$Branch
)
$ErrorActionPreference='Stop'
$OutputEncoding=[Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding=$OutputEncoding
$root=(& git rev-parse --show-toplevel)
if ($LASTEXITCODE -ne 0) { throw 'Git-Arbeitsort fehlt.' }
$root=[IO.Path]::GetFullPath($root).TrimEnd('\','/').ToLowerInvariant()
$sha=[Security.Cryptography.SHA256]::Create()
try { $key=([BitConverter]::ToString($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($root)))).Replace('-','') }
finally { $sha.Dispose() }
$mutex=[Threading.Mutex]::new($false, ('Local\LernluchsWorktree-'+$key))
$acquired=$false
$code=2
try {
  try { $acquired=$mutex.WaitOne(1500) }
  catch [Threading.AbandonedMutexException] { $acquired=$true }
  if (-not $acquired) { throw 'Worktree-Schutz beschäftigt; erneut prüfen.' }
  $arguments=@((Join-Path $PSScriptRoot 'worktree-guard.mjs'),$Action)
  foreach ($pair in @(@('session',$Session),@('turn',$Turn),@('review',$Review),@('confirm-inactive',$ConfirmInactive),@('branch',$Branch))) {
    if ($pair[1]) { $arguments+=('--'+$pair[0]); $arguments+=$pair[1] }
  }
  if ($Action -eq 'hook') { [Console]::In.ReadToEnd() | & node @arguments }
  else { & node @arguments }
  $code=$LASTEXITCODE
} catch {
  [Console]::Error.WriteLine($_.Exception.Message)
  if ($Action -eq 'hook') { @{continue=$false;stopReason=$_.Exception.Message} | ConvertTo-Json -Compress }
} finally {
  if ($acquired) { $mutex.ReleaseMutex() }
  $mutex.Dispose()
}
exit $code
