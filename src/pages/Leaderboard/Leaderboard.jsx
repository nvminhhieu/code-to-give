import './Leaderboard.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import LeaderboardCard from './LeaderboardCard/LeaderboardCard';

export default function Leaderboard()
{
    const width = window.innerWidth
    console.log(width)
    return (
        <div className="leaderboard-cont">
            <div className= "leaderboard-title">
                <h1>Hall of Fame</h1>
            </div>
            <div className="leaderboard">
                {width > 500 ? (<Splide
                    options={ {
                        type      : 'loop',
                        width : '80vw',
                        perPage   : 3,
                        perMove   : 1,
                        gap       : '5vw',
                        pagination: false,
                    } }>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                </Splide>) 
                : (<Splide
                    options={ {
                        type      : 'loop',
                        width : '80vw',
                        perPage   : 1,
                        perMove   : 1,
                        gap       : '5vw',
                        pagination: false,
                    } }>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                    <SplideSlide>
                        <LeaderboardCard/>
                    </SplideSlide>
                </Splide>)}
                
            </div>
        </div>
    )
}