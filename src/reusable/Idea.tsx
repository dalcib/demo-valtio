import { useSnapshot } from 'valtio'
import { ideasState } from './IdeasState'

export type IdeaProps = {
  value: string
  onValueChange: (value: string) => void
  upVotes: number
  downVotes: number
  rating: number
  onUpVote: () => void
  onDownVote: () => void
}

export const Idea = ({ id }: { id: number }) => {
  const snap = useSnapshot(ideasState.ideas[id])
  const state = ideasState.ideas[id]
  return (
    <div className="row">
      <input value={snap.value} onChange={(e) => state.onValueChange(e.target.value)} />
      <button onClick={() => state.onUpVote()}>Up 👍🏽</button>
      <button onClick={() => state.onDownVote()}>Down 👎🏽</button>
      <span>👍🏽 ({snap.upVotes})</span>
      <span>👎🏽 ({snap.downVotes})</span>
      <span>🌟 ({snap.rating})</span>
    </div>
  )
}
