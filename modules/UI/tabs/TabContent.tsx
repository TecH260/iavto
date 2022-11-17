import { getCars, getCarsForCarpark } from 'api/Car'
import { sanitize } from 'libs/functions'
import { ICarModel, ICarparkModel } from 'app/models'
import { Star } from 'assets/icon/icons'
import { CarInfo } from 'modules/elements/Cards/Car/CarCard'
import CarBlock from 'modules/templates/CarBlock'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { Button } from '../buttons/Button'
import Form from '../forms/Form'
import { Textarea } from '../textarea/textarea'

export const TabCars = () => {
  const [cars, setCars] = useState<ICarModel[]>([])
  const { query } = useRouter()

  useEffect(() => {
    getCarsForCarpark(query.id).then((res: any) => {
      setCars(res.data)
    })
  }, [query.id])

  // console.log(cars)

  return (
    <>
      {cars.length ? (
        <CarBlock title={'Автомобили автопарка'} getData={getCars} />
      ) : (
        <>ПУСТО</>
      )}
    </>
  )
}

export const TabProfile = () => {
  const [carpark, setCarpark] = useState<ICarparkModel | null>(null)

  // const [carpark, setCarpark] = useState<ICarparkModel>()
  // const router = useSearchParams()
  // const { id } = router.query
  // useEffect(() => {
  //   getCarpark(id).then((res) => setCarpark(res.data))
  // }, [])

  return (
    <>
      <h2 className='carpark-profile__title title'>Профиль автопарка</h2>

      <h3 className={'carpark-profile__subtitle'}>Профиль автопарка</h3>

      {carpark && (
        <>
          <div className={'carpark-profile__about'}>
            <p
              dangerouslySetInnerHTML={
                carpark.description
                  ? sanitize(carpark.description)
                  : sanitize('')
              }
            ></p>
          </div>

          <Row>
            <Col xs={12} sm={4}>
              <h3 className={'carpark-profile__subtitle'}>Оценка товаров</h3>
              <div className={'carpark-profile__info'}>
                <div className={'carpark-profile__label'}>
                  Средняя оценка автопарка
                </div>
                <div className={'carpark-profile__value'}>
                  <span>{carpark.rait || 5}</span> из 5
                </div>
              </div>
              <div className={'carpark-profile__info'}>
                <div className={'carpark-profile__label'}>
                  Количество оценок
                </div>
                <div className={'carpark-profile__value'}>
                  <span>1 237</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <h3 className={'carpark-profile__subtitle'}>
                Количество заказов
              </h3>
              <div className={'carpark-profile__info'}>
                <div className={'carpark-profile__label'}>
                  Количество заказов
                </div>
                <div className={'carpark-profile__value'}>
                  <span>1 699</span>
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export const TabReviews = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={8} className='order-2 order-md-1'>
          <div className={'carpark-reviews__item'}>
            <div className={'carpark-reviews__top'}>
              <div className={'carpark-reviews__info'}>
                <div className={'carpark-reviews__photo'}>
                  <Image
                    src='/media/user.png'
                    width={100}
                    height={100}
                    alt=''
                  />
                </div>
                <div className={'carpark-reviews__user-data'}>
                  <div className={'carpark-reviews__username'}>Курам Барам</div>
                  <div className={'carpark-reviews__position'}>Водитель</div>
                </div>
              </div>
              <div className={'carpark-reviews__review-info'}>
                <time className={'carpark-reviews__date'} dateTime='2022-04-22'>
                  22 Апреля 2022
                </time>
                <div className={'carpark-reviews__rate'}>
                  {Array(5)
                    .fill(1, 0, 4)
                    .map((star, key) => (
                      <div key={key} className={'icon'}>
                        <Star />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className={'carpark-reviews__comment'}>
              <div className={'carpark-reviews__text'}>
                <span>Автомобиль:</span>
                <p>Lada Granta AMG V8</p>
              </div>
              <div className={'carpark-reviews__text'}>
                <span>Комментарий:</span>
                <p>
                  Я брать машина на сутки. Все класс. Парк хороший. Авто
                  хороший. Звонил хорошо. Машина не ломаться, руль крутиться,
                  коляса поворачиваться. Потом яма была, в яму упала, я жив.
                  Права теперь нет, автопарк сказал, что машина должен вернуть,
                  я машина вернуть в состоянии плохой. Но парк сказал, что
                  машина не плохой. Надо кредит брать, помогите кто нибудь лада
                  купить
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4} className='order-1 order-md-2'>
          <div className={'carpark-reviews__aside reviews-aside'}>
            <div className={'reviews-aside__content'}>
              <div className={'reviews-aside__top'}>
                <div className={'reviews-aside__rate'}>
                  {Array(5)
                    .fill(1, 0, 4)
                    .map((star, key) => (
                      <div key={key} className={'icon'}>
                        <Star color={'icon__item'} />
                      </div>
                    ))}
                </div>
                <div className={'reviews-aside__overall-rate'}>
                  <span>4.95</span> / 5
                </div>
              </div>
              <div className={'reviews-aside__body'}>
                {Array(5)
                  .fill(1, 0, 4)
                  .map((star, key) => (
                    <div key={key} className={'reviews-aside__progress-item'}>
                      <div className={'reviews-aside__progress-label'}>
                        5 звезд
                      </div>
                      <ProgressBar
                        className={'progress'}
                        min={0}
                        max={100}
                        now={80}
                      />
                      <div className={'reviews-aside__progress-value'}>
                        2657
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export const TabFeedback = () => {
  return (
    <div className={`carpark-contact carpark-tab__body auth`}>
      <h1 className={`cars__title title`}>Задайте ваш вопрос автопарку</h1>
      <Form className={'form'}>
        <div className={'form__item'}>
          <div className={`form__label form__label`}>Ваш вопрос</div>
          <div className={'form__wrap'}>
            <Textarea className={`form__input form__input`} />
          </div>
        </div>

        <div className={'form__bottom'}>
          <div className={'form__btn-group'}>
            <div className={'form__btn-wrap'}>
              <Button className={'btn-main'} type={'submit'}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export const TabCar = ({ car }: { car: ICarModel }) => {
  return (
    <>
      <CarInfo Car={car} />
    </>
  )
}
