import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeaturesList = [
  {
    title: 'Infrastructure Maps',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        These maps would show the location of critical infrastructure such as water supplies, power plants, bridges, and roads. They could be color-coded to indicate the current status of each piece of infrastructure (operational, at risk, non-operational).
      </>
    ),
  },
  {
    title: 'Risk Assessment Charts',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        These charts would show the level of risk for each piece of infrastructure, based on factors such as its location, condition, and the current environmental conditions. This could be represented as a bar chart or pie chart.
      </>
    ),
  },
  {
    title: 'Trend Graphs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        These graphs would show trends over time, such as changes in climate conditions, frequency of natural disasters, or changes in the condition of the infrastructure. This could help users identify patterns and make predictions about future risks.
      </>
    ),
  },
  {
    title: 'Disaster Impact Maps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        In the event of a natural disaster or conflict, these maps would show the areas most affected and the impact on the infrastructure. This could help users prioritize their response efforts.
      </>
    ),
  },
  {
    title: 'Response Planning Maps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        These maps would show planned response efforts, such as areas where resources are being deployed or where repairs are being made.
      </>
    ),
  },
  {
    title: 'Climate Data Graphs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        These graphs would show relevant climate data from the Copernicus, such as temperature trends, precipitation levels, or sea level changes.
      </>
    ),
  }
];

function Feature({Svg, title,description}) {
  return (
    <div className={clsx('col col--6')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeaturesList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
