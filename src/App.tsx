import { Idea } from './reusable/Idea'
import { useSnapshot } from 'valtio'
import { ideasState } from './reusable/IdeasState'

function App() {
  const snap = useSnapshot(ideasState)

  return (
    <div className="app">
      <div className="row">
        <button onClick={() => ideasState.addIdea()}>➕</button>
        <button onClick={() => ideasState.removeIdea()}>➖</button>
      </div>

      {snap.ideas.map((ideaState, i) => {
        //console.log(ideaState, i)

        return <Idea key={i} id={i} />
      })}

      <h3>
        Total Votes:{' '}
        {ideasState.ideas.reduce(
          (total, ideaState) => total + ideaState.upVotes + ideaState.downVotes,
          0
        )}
      </h3>
    </div>
  )
}

export default App
