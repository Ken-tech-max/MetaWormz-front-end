import { Box } from '@material-ui/system';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
// import {Link} from 'react-routes';

const types = ['Eggs', 'Baby dragons', 'Teenage dragons', 'Big dragons'];
export function TabComponent() {
  const [activeState, setActive] = useState(types[0]);
  const [content, setContent] = useState([]);

  const Tab = styled.button`
  font-size: 16px;
  padding: 7px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  border-radius: 3px;
  outline: 0;
  margin-right:10px;
  margin-left:10px;
  `;
  // ${({ active }) =>
  //     active &&
  //     `
  //   border-bottom: 2px solid black;
  //   opacity: 1;
  // `}
  const ButtonGroup = styled.div`
  display: flex;
  margin-right:auto;
  margin-left:auto;
`;

  const getListData: any = (data: any) => {
    switch (data) {
      case 'Eggs':

        return ["Eggs"];
        break;
      case 'Baby dragons':

        return ["Baby dragons"];

        break;
      case 'Teenage dragons':

        return ["Teenage dragons"];

        break;
      case 'Big dragons':

        return ["Big dragons"];

        break;
      default:
        return ["Big dragons"];
        break;
    }
  }

  console.log(types);
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            // active={activeState === type}
            onClick={() => {
              setActive(type);
              console.log(getListData(type));
              setContent(getListData(type));
            }
            }
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p>
        <Grid container alignItems="center">
          {content.map(listData => {
            <Grid item xs={12} sm={4} px={2}>
              <div className="nft__item" style={{
                backgroundSize: "cover",
                position: "relative",
                padding: "20px",
                border: "solid 1px rgba(255, 255, 255, .1)",
                borderRadius: "15px",
                marginBottom: "25px",
                background: "#575e77",
              }}>
                <div className="nft__item_wrap" style={{ backgroundSize: "cover", height: "154px" }}>
                  <img src="attributes-imgs/mouth/smile.png" className="lazy nft__item_preview" alt="" />
                </div>
                <div className="nft__item_info" style={{ backgroundSize: "cover" }}>
                  <h4>Smile</h4>
                  <div className="nft__item_price" style={{ backgroundSize: "cover" }}>
                    Rarity: <span style={{ color: "#ffda59" }}>15.03%</span><br />
                    {{ listData }}
                  </div>
                </div>
              </div>
            </Grid>
          })}
        </Grid>
      </p>
    </>
  );
}