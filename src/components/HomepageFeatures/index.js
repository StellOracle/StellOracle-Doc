import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Target Challenge',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    imgSrc: 'infrastructure.png',
    description: (
      <>
        In regions ravaged by natural disasters or conflict, maintaining the integrity of critical infrastructure - such as water supplies, power plants, and communication networks - is paramount not only for immediate survival but also for future recovery.
      </>
    ),
  },
  {
    title: 'Monitoring Capabilities',
    imgSrc: 'sattelite.png',
    description: (
      <>
        StellOracle aims to revolutionize the safety and stability of these vital installations by adopting advanced space technologies ensuring up to date monitoring and rapid response capabilities.
      </>
    ),
  },
  {
    title: 'Severity Labeling',
    imgSrc: 'severity.png',
    description: (
      <>
        The project will also consider populated areas and label the level of severity near the critical infrastructure. This will provide a clear indication of the areas that are most at risk and require immediate attention.
      </>
    ),
  },
  {
    title: 'Future Recovery',
    imgSrc: 'recovery.png',
    description: (
      <>
        By integrating these elements, StellOracle aims to revolutionize the way we protect and maintain critical infrastructure in the face of adversity, ensuring not only immediate survival but also facilitating future recovery.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={require(`@site/static/img/homepage-features/${imgSrc}`).default}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
