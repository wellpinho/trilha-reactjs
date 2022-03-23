import styled from "styled-components";

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