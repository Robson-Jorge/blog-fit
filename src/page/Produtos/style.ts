import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ul li {
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
    height: 300px;
    cursor: pointer;
  }

  ul li h3 {
    font-size: 20px;
    font-weight: bold;
  }

  ul li p {
    /* margin-top: 10px;
    margin-bottom: 10px; */
    font-size: 16px;
  }

  ul li button {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  ul li button:hover {
    background-color: #000;
    color: #fff;
  }
`
