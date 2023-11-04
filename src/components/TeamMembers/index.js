import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const TeamMembersList = [
  {
    fullName: 'Roman Gashynskyi',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    role: 'CEO,  Data Sources Engineer, Code Developer',
    github: 'romaroma2002',
    description: (
      <>
        In regions ravaged by natural disasters or conflict, maintaining the integrity of critical infrastructure - such as water supplies, power plants, and communication networks - is paramount not only for immediate survival but also for future recovery.
      </>
    ),
  },
  {
    fullName: 'Ivan Osiichuk',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    role: 'Product Management, Marketing, Pricing and Sales',
    github: 'IvanOsiichuk',
    description: (
      <>
        StellOracle aims to revolutionize the safety and stability of these vital installations by adopting advanced space technologies ensuring up to date monitoring and rapid response capabilities.
      </>
    ),
  },
  {
    fullName: 'Vitaly Brevus',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    role: 'CTO',
    github: 'vitalyte',
    description: (
      <>
        The project will also consider populated areas and label the level of severity near the critical infrastructure. This will provide a clear indication of the areas that are most at risk and require immediate attention.
      </>
    ),
  },
  {
    fullName: 'Yuriy Skorenkyy',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    role: 'Business Modelling and Value Engineering',
    github: 'skorenkyy',
    description: (
      <>
        By integrating these elements, StellOracle aims to revolutionize the way we protect and maintain critical infrastructure in the face of adversity, ensuring not only immediate survival but also facilitating future recovery.
      </>
    ),
  },
  {
    fullName: 'Aser Kashosi',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    role: 'Data Sources & Tools, Code Developer',
    github: 'aserkash',
    description: (
      <>
        By integrating these elements, StellOracle aims to revolutionize the way we protect and maintain critical infrastructure in the face of adversity, ensuring not only immediate survival but also facilitating future recovery.
      </>
    ),
  },
  {
    fullName: 'Yaroslav Mashtaliar',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    role: 'Data Sources Engineer, Technical Maintainer',
    github: 'NebelFox',
    description: (
      <>
        By integrating these elements, StellOracle aims to revolutionize the way we protect and maintain critical infrastructure in the face of adversity, ensuring not only immediate survival but also facilitating future recovery.
      </>
    ),
  },
  {
    fullName: 'Nazarii Melnyk',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    role: 'Data Sources & Tools',
    github: 'Nazarii-Melnyk',
    description: (
      <>
        By integrating these elements, StellOracle aims to revolutionize the way we protect and maintain critical infrastructure in the face of adversity, ensuring not only immediate survival but also facilitating future recovery.
      </>
    ),
  },
];

function TeamMember({Svg, fullName, role, github, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={`https://github.com/${github}`}>{fullName}</Link>
          </Heading>
        <p>{role}</p>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function TeamMembers() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {TeamMembersList.map((props, idx) => (
            <TeamMember key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
