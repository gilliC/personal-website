import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import dayjs from "dayjs";
import { t } from "services/translation/translate";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const SubTitle = ({ date, readTimeInMinutes }) => {
  dayjs.extend(customParseFormat)
  const dateString = dayjs(date, 'DD/MM/YYYY').format('MMMM DD, YYYY');

  return <SubTitleComponent>{t("articlesScreen.articleCard.subTitle", { date: dateString, readTimeInMinutes })}</SubTitleComponent>
}

const SubTitleComponent = styled.p`
  color: ${colorsPalette.GREY};
  font-family: ${MAIN_FONT};
  font-size: min(0.8vw, 20px);
  font-weight: 700;
  margin: 0;
`;
