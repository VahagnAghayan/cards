import { useState,useCallback } from "react";

import { config } from "../../utils/configs";
import compareFn from "../../helpers/sortCompareFn";
import getRandomNumber from "../../helpers/getRandomNumber";
import duplicateChecker from "../../helpers/duplicateChecker";

import Main from "../main";
import Aside from "../aside";
import Header from "../header";
import Footer from "../footer";

import './layout.scss';

const Layout = () => {
  const [cards, setCards] = useState([]);

  const {cards: {minNumber, maxNumber}} = config;

  const addCard = () => {
    const randomNumber = getRandomNumber(minNumber,maxNumber);
    if(duplicateChecker(randomNumber, cards)) {
      addCard()
    } else {
      setCards(state => {
        return [...state, randomNumber]
      })
    } 
  }

  const sortCards = () => {
    if(cards.length > 0) {
      setCards(cards => { 
        const sortedCards = [...cards].sort(compareFn);
        return sortedCards;
      })
    } else {
      alert("you dant have any cards to sort, add multiple to sort")
    }
  }
  
  const deleteCard = useCallback((index, number) => {
    const confirmationText = `Are you sure you want to delete an item with number ${number}`;
    if(window?.confirm(confirmationText) === true) {
      setCards(cards => {
        const newCards = [...cards];
        newCards.splice(index,1);
        return newCards;
      });
    } else {
      return;
    }
  },[setCards])

  const deleteAllCards = () => {
    const confirmationText = "Are you sure you want to delete all cards";
    if(window?.confirm(confirmationText) === true) {
      setCards([])
    }
    return;
  }

  return (
    <div className="layout">
      <div className="main">
        <Header addCard={addCard} sortCards={sortCards} deleteAllCards={deleteAllCards}/>
        <Main cards={cards} deleteCard={deleteCard} />
        <Footer />
      </div>
      <div className="sidebar">
        <Aside />
      </div>
    </div>
  )
}

export default Layout;
