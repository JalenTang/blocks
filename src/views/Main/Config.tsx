import React, { FC } from 'react';
import Gen from '../../utils/index';

const gen = new Gen();

console.log('------------', gen.run(1, { width: 100 }));

const Config: FC = () => {
    return <div>config</div>;
};

export default Config;
