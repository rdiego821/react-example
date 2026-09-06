import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formattedUserName = <span>@midudev</span>

    return (
        <section className="App">
            <TwitterFollowCard 
                formattedUserName={formattedUserName}
                userName="rdiego821" 
                name="Diego Acero" 
                isFollowing />

            <TwitterFollowCard 
                formattedUserName={formattedUserName}
                userName="pheralb" 
                name="Pablo Hernandez" 
                isFollowing={false} />  
        </section>
    )
}   