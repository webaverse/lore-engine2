import uuidByString from 'uuid-by-string';

import {Ctx} from '../context.js';

const Characters = ({
  url,
  id,
}) => {
  return (
    <div>
      characters {url} {id}
    </div>
  );
};
Characters.getInitialProps = async ctx => {
  const {req} = ctx;
  const c = new Ctx();
  return {
    url: req.url,
    id: uuidByString(req.url),
  };
};

export default Characters;