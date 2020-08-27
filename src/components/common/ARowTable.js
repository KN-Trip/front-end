import React from "react";
import styled from "styled-components";

import nonCB from "../../assets/checkbox-default.png";
import CB from "../../assets/checkbox-checked.png";

const TableWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const StyledTable = styled.table`
  width: 100%;
  height: 144px;

  margin: 52px 0;
`;

const StyledCheckBox = styled.div`
  width: 24px;
  height: 24px;

  background-image: url(${(props) => (props.checked ? CB : nonCB)});

  &:hover {
    cursor: pointer;
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;

  user-select: none;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const LabelText = styled.span`
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => (props.checked ? 1000 : "bold")};
  color: ${(props) => (props.checked ? "#f85c5c" : "#757575")};

  line-height: 1.88;
  letter-spacing: -0.64px;
`;

const findIndex = (i, j, A) => {
  return i * A + j;
};

function ARowTable({ A, data, filterStatus, onToggle }) {
  return (
    <>
      <TableWrapper>
        <StyledTable>
          {data.map((row, i) => {
            return (
              <tr>
                {row.map((item, j) => (
                  <td>
                    <TableCell
                      onClick={() => {
                        onToggle(findIndex(i, j, A));
                      }}
                    >
                      <StyledCheckBox
                        type="checkbox"
                        checked={filterStatus[i][j]}
                      />
                      <Label>
                        <LabelText checked={filterStatus[i][j]}>
                          {item}
                        </LabelText>
                      </Label>
                    </TableCell>
                  </td>
                ))}
              </tr>
            );
          })}
        </StyledTable>
      </TableWrapper>
    </>
  );
}

export default ARowTable;