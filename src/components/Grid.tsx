import styled from "@emotion/styled";
import { css } from "@emotion/core";

const gridStyles = ({ minCellWidth = `200px`, gap = `25px` }) => {
  return css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${minCellWidth}, 1fr));
    grid-gap: ${gap};
  `;
};

const Grid = styled.div`
  ${gridStyles}
`;

export default Grid;
