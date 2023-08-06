import * as Collapsible from '@radix-ui/react-collapsible'

import { ChevronDown } from 'lucide-react'
import { Class } from './Class'
import { useAppSelector } from '../store'
import { play } from '../store/slices/player'
import { useDispatch } from 'react-redux'

interface ModuleProps {
  title: string
  amountOfLessons: number
  moduleIndex: number
}

export const Module = ({
  title,
  amountOfLessons,
  moduleIndex,
}: ModuleProps) => {
  const dispatch = useDispatch()

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    return { currentLessonIndex, currentModuleIndex }
  })

  const lessons = useAppSelector(
    (state) => state.player.course.modules[moduleIndex].lessons,
  )

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex

            return (
              <Class
                duration={lesson.duration}
                name={lesson.title}
                key={lesson.id}
                onPlay={() => dispatch(play({ moduleIndex, lessonIndex }))}
                isCurrent={isCurrent}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
