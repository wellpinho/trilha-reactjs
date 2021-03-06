import styled from "styled-components";
import { darken, transparentize } from 'polished'

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const Container = styled.form`
  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .2rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    /* todo input abaixo deste recebe este style */
    & + input {
      margin-top: 1rem;
    }
  }

  /* pega apenas os buttons do typo submit */
  button[type="submit"] {
    width: 100%;
    padding:  0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: .2rem;
    border:  0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter .2s;
    &:hover {
      /* reduz a luminosidade do hover */
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
`;

export const RadioBox = styled.button<IRadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .2rem;

    background: ${
      (props) => props.isActive 
        // 0.9 = 90% de transparĂȘncia
        ? transparentize(0.7, colors[props.activeColor])
        : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color .2s;

    &:hover {
      /* escurece a cor em 10% */
      border-color: ${darken(.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)
    }
`