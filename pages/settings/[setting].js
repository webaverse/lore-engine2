import uuidByString from 'uuid-by-string';

import {Ctx} from '../../context.js';

const Setting = ({
  url,
  id,
  setting,
}) => {
  return (
    <div>
      setting {url} {id} {setting}
    </div>
  );
};
Setting.getInitialProps = async ctx => {
  const {req} = ctx;
  const match = req.url.match(/^\/settings\/([^\/]*)/);
  const setting = match ? match[1] : '';
  const c = new Ctx();
  return {
    url: req.url,
    id: uuidByString(setting),
    setting,
  };
};

export default Setting;