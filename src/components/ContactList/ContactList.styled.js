import styled from '@emotion/styled';
import { mixins } from 'constants';

export const ContactsWrapper = styled.div`
  height: 500px;
  overflow-y: scroll;
  font-size: 10px;
  height: 350px;
  margin: 30px auto;
  width: 250px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  font-family: 'Poppins', sans-serif;
  color: #fff;
  letter-spacing: 0.5px;
  border: none;
  overflow-x: hidden;
  padding: 15px 0;

  ${mixins.mobile} {
    width: 300px;
  }
  ${mixins.tablet} {
    width: 500px;
  }

  .headerWrap {
    display: flex;
    width: 160px;
    gap: 15px;
    margin-bottom: 30px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 30px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;

    ${mixins.tablet} {
      font-size: 35px;
    }
  }
  .addContactBtn {
    width: 25px;
    height: 20px;
    border: none;
    outline: none;
    color: #988989;
    font-size: 15px;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s ease;

    ${mixins.tablet} {
      width: 30px;
      height: 25px;
    }
  }
  .addIcon {
    width: 15px;
    height: 15px;
    ${mixins.tablet} {
      width: 20px;
      height: 20px;
    }
  }

  .contactList {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0;
    list-style: none;
    justify-content: center;
    align-items: center;

    ${mixins.tablet} {
      font-size: 15px;
    }
  }
`;
