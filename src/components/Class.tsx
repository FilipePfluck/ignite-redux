import { PlayCircle, Video } from 'lucide-react'

interface ClassProps {
  name: string
  duration: string
  onPlay: () => void
  isCurrent?: boolean
}

export const Class = ({
  name,
  duration,
  onPlay,
  isCurrent = false,
}: ClassProps) => {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 data-[active=true]:text-emerald-400"
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}

      <span>{name}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500 ">
        {duration}
      </span>
    </button>
  )
}
