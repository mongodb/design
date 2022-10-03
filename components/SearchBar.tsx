import TextInput from '@leafygreen-ui/text-input';
import { palette } from '@leafygreen-ui/palette';
import IconButton from '@leafygreen-ui/icon-button';
import Icon from '@leafygreen-ui/icon';

const Searchbar = () => {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        padding: '24px 32px 16px 32px',
        borderBottom: `1px solid ${palette.gray.light2}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <TextInput
          type="search"
          aria-label="Search"
          placeholder="Try 'banner'"
          style={{
            minWidth: '360px',
            backgroundColor: palette.gray.light3,
            color: palette.gray.dark1,
            borderColor: palette.gray.light1,
          }}
        />
      </div>
      <div>
        <IconButton aria-label="Questions">
          <Icon glyph="QuestionMarkWithCircle" />
        </IconButton>
        <IconButton aria-label="Settings">
          <Icon glyph="Settings" />
        </IconButton>
      </div>
    </div>
  );
};

export default Searchbar;
