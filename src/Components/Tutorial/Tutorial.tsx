import React from 'react';
import fastGame from './../../Common/assets/images/fastGame.jpg'
import originalGame from './../../Common/assets/images/originalGame.jpg'
import printCoupons from './../../Common/assets/images/printCoupons.jpg'
import generateCoupons from './../../Common/assets/images/generateCoupons.jpg'
import generateGame from './../../Common/assets/images/generateGame.jpg'
import FirstOne from './../../Common/assets/images/Examples/exampleFirstRound.jpg'
import FirstSecond from './../../Common/assets/images/Examples/exampleFirstRound2.jpg'
import FirstThird from './../../Common/assets/images/Examples/examplefirstRound3.jpg'
import FirstFourth from './../../Common/assets/images/Examples/examplefirstRound4.jpg'
import SecondOne from './../../Common/assets/images/Examples/exampleSecondRound.jpg'
import SecondTwo from './../../Common/assets/images/Examples/exampleSecondRound2.jpg'
import LastOne from './../../Common/assets/images/Examples/exampleLastRound1.jpg'
import LastTwo from './../../Common/assets/images/Examples/exampleLastRound2.jpg'
import attention from './../../Common/assets/images/attention.jpg'

const Tutorial = () => {
    return (
        <div className="tutorialWrapper">

            <h2>General rules and recommendations</h2>
            <section className="tutorialContainer">
                <h3> Game selection :</h3>
                <div className={'kindGame borderClass'}>
                    <img src={fastGame} alt={'fast game button'}/>
                    <p> Game for a small company. Total of numbers in the game is 60</p>
                </div>
                <div className={'kindGame'}>
                    <img src={originalGame} alt={'original game button'}/>
                    <p> Game for a big company. Total of numbers in the game is 90</p>
                </div>
            </section>
            <section className="tutorialContainer">
                <h3> Coupons :</h3>
                <div className={'kindGame borderClass'}>
                    <img src={printCoupons} alt={'print coupons button'}/>
                    <p> In order to play the game, you will need coupons.
                        You can print them on the printer after you select the type of game and click on the "PRINT
                        COUPONS"
                        button</p>
                </div>
                <div className={'kindGame'}>
                    <img src={generateCoupons} alt={'generate coupons button'}/>
                    <p> you can generate coupons for the game by clicking the "GENERATE COUPONS" button.
                        Numbers in the coupon drop out
                        randomly.</p>
                </div>
            </section>
            <section className="tutorialContainer">
                <h3>Game process:</h3>
                <div className={'kindGame borderClass'}>
                    <img src={generateGame} alt={'generate game button'}/>
                    <p> For the game you need several players and a master. Each player must have at least one coupon.
                        after the type of game is selected and the coupons are divided between the players, the master
                        presses the
                        "GENERATE" button.
                        Players must cross out with a pen or pencil the numbers that have fallen, if they are in their
                        coupons..</p>
                </div>
                <p>The game is divided into two rounds (first round, last round) if you have chosen a quick game and
                    into
                    three
                    rounds
                    (first round, middle round, last round) if you have chosen the original game</p>

                <div className='examples borderClass'>
                    <p>In the first round, the winner is a coupon in which any one horizontal line of the drawn numbers
                        is
                        crossed
                        out</p>
                    <img src={FirstOne} alt={'example win first round'}/>
                    <img src={FirstSecond} alt={'example win first round'}/>
                    <img src={FirstThird} alt={'example win first round'}/>
                    <img src={FirstFourth} alt={'example win first round'}/>
                </div>
                <div className='examples borderClass'>
                    <p> In the middle round, the coupon wins, in which any one part of the coupon from the numbers drawn
                        is
                        crossed
                        out</p>
                    <img src={SecondOne} alt={'example win middle round'}/>
                    <img src={SecondTwo} alt={'example win middle round'}/>

                </div>
                <div className='examples borderClass'>
                    <p> In the last round, the coupon wins, in which all the numbers in the coupon are crossed out</p>
                    <img src={LastOne} alt={'example win last round'}/>
                    <img src={LastTwo} alt={'example win last round'}/>

                </div>
                <p>The game ends as soon as one of the tickets wins the last round or the number of moves runs out.
                    The game has a limit on the number of dropped numbers. For a quick game, the limit is 3 numbers, for
                    the
                    original game, the limit is 6 numbers.</p>
                <div className='examples'>
                    <p> 5 moves before the limit, you will see a corresponding warning on the screen.</p>
                    <img src={attention} alt={'attention'}/>

                </div>
            </section>

            <h3>Good luck and play fun!</h3>
        </div>
    );
};

export default Tutorial;