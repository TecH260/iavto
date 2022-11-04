import { ITabItems } from 'app/models'
import details from 'assets/sass/components/car/car__details.module.scss'
import styles from 'assets/sass/components/tabs/tab-nav.module.scss'
import { Container, Nav, Tab } from 'react-bootstrap'

export const CarparkTabs = ({ tabs }: { tabs: ITabItems[] }) => {
  return (
    <>
      {tabs.length ? (
        <Tab.Container
          id='left-tabs-example'
          defaultActiveKey={tabs[0].eventKey}
        >
          <Container>
            <Nav
              variant={'pills'}
              fill
              as={'ul'}
              className={`${styles['tab-nav']} carpark__tab-nav`}
            >
              {tabs.map((item, key) => (
                <TabLink key={key} title={item.title} eventKey={item.eventKey} />
              ))}
            </Nav>
          </Container>
          <Tab.Content className={`${styles['carpark__tabs']} row`}>
            {tabs.map((item, key) => (
              <Tab.Pane key={key} eventKey={item.eventKey}>
                <div className={`carpark-tab__body ${details['car']}`}>
                  <Container>
                    {item.contentChild}
                  </Container>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      ) : (
        <></>
      )}
    </>
  )
}

export const TabLink = ({
  title,
  eventKey
}: {
  title: string
  eventKey: string
}) => {
  return (
    <Nav.Item bsPrefix={`${styles['tab-nav__item']} nav-item`} as={'li'}>
      <Nav.Link className={`${styles['tab-nav__link']}`} eventKey={eventKey}>
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}
