import { IdeaProps } from './Idea'
import { proxy } from 'valtio'

export const createIdeaState = () => {
  const state: IdeaProps = proxy({
    value: '',
    onValueChange(value: string) {
      this.value = value
    },
    upVotes: 0,
    downVotes: 0,
    onUpVote() {
      this.upVotes++
    },
    onDownVote() {
      this.downVotes++
    },
    get rating() {
      return this.upVotes - this.downVotes
    },
  })

  return state
}

/* const stat = createIdeaState()
stat.onValueChange('dfsdfdsf')
stat.onUpVote()
stat.onUpVote()
stat.onUpVote()
stat.onUpVote()
console.log(stat, 'dfasdf'); */
