import { Spacer, Text } from '@nextui-org/react';
import { useTheme } from '~/providers/theme';
import { Quote } from '~/shared/ui/quote';

const tools = [
  'React',
  'React-Native',
  'React-Navigation',
  'TypeScript',
  'Redux(thunk,saga)',
  'React-Router-Dom',
  'Reanimated',
  'Nest.js',
  'Apollo GraphQL',
  'Prisma',
  'TypeORM',
  'firebase',
  'react-native-maps',
  'styled-components',
  'jest',
  'detox',
  'Sequelize',
  'Relay GraphQL',
  'Mobx',
  'Formik',
  'jotai',
];

export const Tools = () => {
  const isDark = useTheme().mode === 'dark';

  return (
    <>
      <Quote label="tools" />
      <Spacer y={0.5} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {tools.map((tool) => {
          return (
            <div
              key={tool}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: isDark ? '#373636dd' : '#e7e6e6dd',
                borderRadius: 30,
                marginRight: 10,
                marginBottom: 10,
              }}
            >
              <Text>{tool}</Text>
            </div>
          );
        })}
      </div>
    </>
  );
};
