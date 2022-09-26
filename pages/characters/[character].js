import {useRouter} from 'next/router'
import uuidByString from 'uuid-by-string';

import {Ctx} from '../../context.js';

const Character = ({
  url,
  id,
  character,
}) => {
  return (
    <div>
      character {url} {id} {character}
    </div>
  );
};
Character.getInitialProps = async ctx => {
  const {req} = ctx;
  const match = req.url.match(/^\/characters\/([^\/]*)/);
  const character = match ? match[1] : '';
  const c = new Ctx();
  return {
    url: req.url,
    id: uuidByString(character),
    character,
  };
};

export default Character;