import { FormEvent, useState, KeyboardEvent } from "react"

import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Timeline.css"

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Hello World'
  ])

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/jvbicalho01.png" alt="João Vítor Bicalho" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return (
          <Tweet key={tweet} content={tweet} />
        )
      })}

    </main>
  )
}