import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import ChoiceButton from './ChoiceButton';

const CHOICES = {
    rock: {
        name: 'Rock ',
        defeats: ['scissors', 'lizard'],
    },
    paper: {
        name: 'Paper',
        defeats: ['rock', 'spock'],
    },
    scissors: {
        name: 'Scissors',
        defeats: ['paper', 'lizard'],
    },
    lizard: {
        name: 'Lizard',
        defeats: ['paper', 'spock'],
    },
    spock: {
        name: 'Spock',
        defeats: ['scissors', 'rock'],
    },
};

const Game = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        if (result === 'win') {
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 3000);
        }
    }, [result]);

    const handleClick = (choice) => {
        if (!isLocked) {
            const computerChoice = Object.keys(CHOICES)[Math.floor(Math.random() * 5)];
            setUserChoice(choice);
            setComputerChoice(computerChoice);
            setIsLocked(true);

            if (CHOICES[choice].defeats.includes(computerChoice)) {
                setResult('win');
            } else if (choice === computerChoice) {
                setResult('tie');
            } else {
                setResult('lose');
            }

            setTimeout(() => {
                setIsLocked(false);
                setUserChoice(null);
                setComputerChoice(null);
                setResult(null);
            }, 3000);
        }
    };

    return (
        <>
            {showConfetti && <Confetti />}
            <h1>Piedra 🗿, Papel📄, Tijeras✂️, Lagarto🦎, Spock🖖🏻</h1>
            <div className="choices">
                {Object.keys(CHOICES).map((choice) => (
                    <ChoiceButton key={choice} choice={choice} handleClick={handleClick} disabled={isLocked}>
                        {CHOICES[choice].name}
                    </ChoiceButton>
                ))}
            </div>
            {userChoice && (
                <div>
                    <p>You chose {CHOICES[userChoice].name}.</p>
                    <p>The computer chose {CHOICES[computerChoice].name}.</p>
                    {result === 'win' && <p>You win!</p>}
                    {result === 'lose' && <p>You lose!</p>}
                    {result === 'tie' && <p>It's a tie!</p>}
                </div>
            )}
        </>
    );
};

export default Game;