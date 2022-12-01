import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';
import { Body } from '@leafygreen-ui/typography';
import IconDo from 'components/ContentstackRichText/BasicUsageBlock/IconDo';
import IconDont from 'components/ContentstackRichText/BasicUsageBlock/IconDont';
import ContentstackRichText from '..';

const HeadingWrapper = styled('div')`
  align-items: center;
  display: flex;
`;

const StyledBody = styled(Body)`
  display: inline-flex;
  margin-left: 6px;
  color: ${props => props.color};
`;

const BasicUsageBlock = ({ entry }) => {
  return (
    <div>
      <HeadingWrapper>
        <IconDo />
        <StyledBody color={palette.green.dark2}>
          <b>Do</b>
        </StyledBody>
      </HeadingWrapper>
      <ContentstackRichText content={entry.do_s} />
      <HeadingWrapper>
        <IconDont />
        <StyledBody color={palette.red.dark2}>
          <b>Don&apos;t</b>
        </StyledBody>
      </HeadingWrapper>
      <ContentstackRichText content={entry.don_ts} />
    </div>
  );
};

export default BasicUsageBlock;
