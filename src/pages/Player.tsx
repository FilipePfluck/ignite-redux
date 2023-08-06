import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { useAppSelector } from '../store'
import { Video } from '../components/Video'
import { useCurrentLesson } from '../store/slices/player'
import { useEffect } from 'react'

export const Player = () => {
  const modules = useAppSelector((state) => state.player.course.modules)

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    document.title = currentLesson.title
  }, [currentLesson])

  return (
    <div className="min-h-screen py-8 bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <Header />
        <main className="relative pr-80 flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 overflow-y-scroll right-0 divide-y-2 divide-zinc-900 border-lborder-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  title={module.title}
                  moduleIndex={index}
                  amountOfLessons={module.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}
