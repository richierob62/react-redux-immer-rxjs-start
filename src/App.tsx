import * as S from './selectors'
import configureStore from './configureStore'
import React, { Component } from 'react'
import { AppState } from './interfaces'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './App.css'

interface STP {
  show_error: boolean
  show_confirm: boolean
  show_success: boolean
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mstp = (state: AppState): STP => ({
  show_error: S.show_error(state),
  show_success: S.show_success(state),
  show_confirm: S.show_confirm(state)
})

export default withRouter(connect(mstp)(App) as any)

// import * as React from 'react'

// import async_loader from './utils/async_loader'
// import Main from './components/Main'
// import ProtectedRoute from './ProtectedRoute'
// import {
//   AppStart,
//   CheckTimeLeft,
//   PollServer,
//   PreLoadGlobalData,
//   SaveHistoryObject,
//   UpdateTimeClock
// } from './actions/action_creators'
// import { AppState } from 'state'

// import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import { PageURL } from './interfaces'
// import { Route, Switch } from 'react-router-dom'
// import { StripeProvider } from 'react-stripe-elements'

// // import ResetPassword from './components/ResetPassword'

// const AddEditConstraint = async_loader(() => import('./components/AddEditConstraint'))
// const AddEditDock = async_loader(() => import('./components/AddEditDock'))
// const AddEditUser = async_loader(() => import('./components/AddEditUser'))
// const AddEditLocation = async_loader(() => import('./components/AddEditLocation'))
// const AddEditProduct = async_loader(() => import('./components/AddEditProduct'))
// const AddEditShipper = async_loader(() => import('./components/AddEditShipper'))
// const ApprovedCarrier = async_loader(() => import('./components/ApprovedCarrier'))
// const BlockUnblock = async_loader(() => import('./components/BlockUnblock'))
// const BookingBody = async_loader(() => import('components/BookingBody'))
// const BookingDetails = async_loader(() => import('./components/BookingDetails'))
// const BookingDockAndTimeSlotSelector = async_loader(() =>
//   import('./components/BookingDockAndTimeSlotSelector')
// )
// const BookingLocationAndShipper = async_loader(() =>
//   import('./components/BookingLocationAndShipper')
// )
// const BookingNotification = async_loader(() => import('components/BookingNotification'))
// const CardUpdateForm = async_loader(() => import('./components/CardUpdateForm'))
// const CarrierCompany = async_loader(() => import('components/CarrierCompany'))
// const CarrierDashBoard = async_loader(() => import('components/CarrierDashBoard'))
// const ConfirmModal = async_loader(() => import('components/ConfirmModal'))
// const DisplayApprovedReceiverInfo = async_loader(() =>
//   import('components/DisplayApprovedReceiverInfo')
// )
// const DisplayUnapprovedReceiverInfo = async_loader(() =>
//   import('components/DisplayUnapprovedReceiverInfo')
// )
// const EditDockConstraints = async_loader(() => import('components/EditDockConstraints'))
// const EditCarrierInfo = async_loader(() => import('./components/EditCarrierInfo'))
// const EditReceiverInfo = async_loader(() => import('./components/EditReceiverInfo'))
// const ErrorModal = async_loader(() => import('components/ErrorModal'))
// const Help = async_loader(() => import('components/Help'))
// const InviteCarrier = async_loader(() => import('components/InviteCarrier'))
// const Login = async_loader(() => import('./components/Login'))
// const ForgotPassword = async_loader(() => import('./components/ForgotPassword'))
// const ResetPassword = async_loader(() => import('./components/ResetPassword'))
// const ManageCarriers = async_loader(() => import('components/ManageCarriers'))
// const ManageConstraints = async_loader(() => import('components/ManageConstraints'))
// const ManageLocationsAndDocks = async_loader(() =>
//   import('components/ManageLocationsAndDocks')
// )
// const ManageProducts = async_loader(() => import('components/ManageProducts'))
// const ManageReceivers = async_loader(() => import('./components/ManageReceivers'))
// const ManageShippers = async_loader(() => import('components/ManageShippers'))
// const ManageSubscription = async_loader(() => import('./components/ManageSubscription'))
// const ManageUsers = async_loader(() => import('components/ManageUsers'))
// const MatchingReservations = async_loader(() => import('components/MatchingReservations'))
// const NewBooking = async_loader(() => import('components/NewBooking'))
// const NewNote = async_loader(() => import('components/NewNote'))
// const Notes = async_loader(() => import('components/Notes'))
// const PaymentForm = async_loader(() => import('./components/PaymentForm'))
// const Print = async_loader(() => import('components/Print'))
// const ReceiverCompany = async_loader(() => import('components/ReceiverCompany'))
// const ReceiverDashBoard = async_loader(() => import('./components/ReceiverDashBoard'))
// const ReceiverDaySchedule = async_loader(() => import('./components/ReceiverDaySchedule'))
// const ReceiverWeekSchedule = async_loader(() =>
//   import('./components/ReceiverWeekSchedule')
// )
// const RegisterCarrier = async_loader(() => import('./components/RegisterCarrier'))
// const RegisterReceiver = async_loader(() => import('./components/RegisterReceiver'))
// const RequestAccess = async_loader(() => import('components/RequestAccess'))
// const Reservation = async_loader(() => import('./components/Reservation'))
// const ReservationDetails = async_loader(() => import('./components/ReservationDetails'))
// const ReservationDockAndTimeSlotSelector = async_loader(() =>
//   import('./components/ReservationDockAndTimeSlotSelector')
// )
// const ReservationNotification = async_loader(() =>
//   import('components/ReservationNotification')
// )
// const SingleDock = async_loader(() => import('components/SingleDock'))
// const SingleConstraint = async_loader(() => import('components/SingleConstraint'))
// const SingleLocation = async_loader(() => import('components/SingleLocation'))
// const SingleProduct = async_loader(() => import('components/SingleProduct'))
// const SingleShipper = async_loader(() => import('components/SingleShipper'))
// const SingleUser = async_loader(() => import('./components/SingleUser'))
// const SuccessModal = async_loader(() => import('components/SuccessModal'))
// const Terms = async_loader(() => import('./components/Terms'))
// const UnapprovedCarrier = async_loader(() => import('./components/UnapprovedCarrier'))
// const Video = async_loader(() => import('./components/Video'))
// const TutVid = async_loader(() => import('./components/TutVid'))

// interface AppProptypes extends STP {
//   dispatch: any
//   history: any
// }

// class App extends React.Component<AppProptypes, any> {
//   interval: any
//   poll_interval: any

//   constructor(props: any) {
//     super(props)
//     const { dispatch, history } = props
//     dispatch(AppStart())
//     dispatch(SaveHistoryObject(history))
//     dispatch(PreLoadGlobalData())
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.props.dispatch(CheckTimeLeft()), 1 * 60 * 1000)
//     this.poll_interval = setInterval(
//       () => this.props.dispatch(PollServer()),
//       5 * 60 * 1000
//     )
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval)
//     clearInterval(this.poll_interval)
//   }

//   updateClock = (e: React.MouseEvent<HTMLElement>) => {
//     e.stopPropagation()
//     this.props.dispatch(UpdateTimeClock())
//   }

//   render() {
//     const { show_confirm, show_error, show_success } = this.props

//     return (
//       <StripeProvider apiKey="pk_live_6mbnJXihhRlBKKEPYDwcOBZf">
//         <div onClick={e => this.updateClock(e)}>
//           {show_confirm && <ConfirmModal />}
//           {show_error && <ErrorModal />}
//           {show_success && <SuccessModal />}

//           <Route
//             render={({ location }) => (
//               <TransitionGroup>
//                 <CSSTransition
//                   key={location.key}
//                   classNames={'pagetransition'}
//                   timeout={350}
//                 >
//                   <Switch location={location}>
//                     <Route path={PageURL.HOME} component={Main} exact={true} />
//                     <Route path={PageURL.TERMS} component={Terms} />
//                     <Route path={PageURL.VIDEO} component={Video} />
//                     <Route path={PageURL.HELP} component={Help} />
//                     <Route path={PageURL.TUTVID} component={TutVid} />
//                     <Route path={PageURL.FORGOT_PASSWORD} component={ForgotPassword} />
//                     <Route
//                       path={`${PageURL.RESET_PASSWORD}/:token`}
//                       render={({
//                         match: {
//                           params: { token }
//                         }
//                       }) => <ResetPassword token={token} />}
//                     />
//                     <Route
//                       path={PageURL.REGISTER_AS_RECEIVER}
//                       component={RegisterReceiver}
//                     />
//                     <Route
//                       path={PageURL.REGISTER_AS_CARRIER}
//                       component={RegisterCarrier}
//                     />
//                     <Route path={PageURL.LOGIN} component={Login} />
//                     <Route
//                       path={PageURL.MANAGE_SUBSCRIPTION}
//                       component={ManageSubscription}
//                     />
//                     <Route path={PageURL.PAYMENT_FORM} component={PaymentForm} />
//                     <ProtectedRoute
//                       path={PageURL.RECEIVER_DASHBOARD}
//                       component={ReceiverDashBoard}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.UPDATE_CARD}
//                       component={CardUpdateForm}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RECEIVER_WEEK_SCHEDULE}
//                       component={ReceiverWeekSchedule}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RECEIVER_DAY_SCHEDULE}
//                       component={ReceiverDaySchedule}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RESERVE_DOCK}
//                       component={Reservation}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.BLOCK_DOCKS}
//                       component={BlockUnblock}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.BOOKING_DETAILS}
//                       component={BookingDetails}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RESERVATION_DETAILS}
//                       component={ReservationDetails}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.NOTES}
//                       component={Notes}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.NEW_NOTE}
//                       component={NewNote}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.EDIT_RESERVATION}
//                       component={Reservation}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.SELECT_RESERVATION_DOCK_AND_TIME}
//                       component={ReservationDockAndTimeSlotSelector}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.SELECT_BOOKING_DOCK_AND_TIME}
//                       component={BookingDockAndTimeSlotSelector}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RESERVATION_NOTIFICATIONS}
//                       component={ReservationNotification}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RESCHEULE_BOOKING_AS_RECEIVER}
//                       component={BookingDockAndTimeSlotSelector}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.BOOKING_NOTIFICATIONS}
//                       component={BookingNotification}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.EDIT_BOOKING_AS_CARRIER}
//                       component={BookingLocationAndShipper}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.BOOKING_BODY}
//                       component={BookingBody}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.PRINT}
//                       component={Print}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_CARRIERS}
//                       component={ManageCarriers}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.APPROVED_CARRIER}
//                       component={ApprovedCarrier}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.UNAPPROVED_CARRIER}
//                       component={UnapprovedCarrier}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.INVITE_EMAIL}
//                       component={InviteCarrier}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_USERS}
//                       component={ManageUsers}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.ADD_EDIT_USER}
//                       component={AddEditUser}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.USER}
//                       component={SingleUser}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_LOCATIONS_AND_DOCKS}
//                       component={ManageLocationsAndDocks}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.ADD_EDIT_LOCATION}
//                       component={AddEditLocation}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.LOCATION}
//                       component={SingleLocation}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.ADD_EDIT_DOCK}
//                       component={AddEditDock}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.EDIT_DOCK_CONSTRAINTS}
//                       component={EditDockConstraints}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.DOCK}
//                       component={SingleDock}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_CONSTRAINTS}
//                       component={ManageConstraints}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.ADD_EDIT_CONSTRAINT}
//                       component={AddEditConstraint}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.CONSTRAINT}
//                       component={SingleConstraint}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_SHIPPERS}
//                       component={ManageShippers}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.ADD_EDIT_SHIPPER}
//                       component={AddEditShipper}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.SHIPPER}
//                       component={SingleShipper}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_PRODUCTS}
//                       component={ManageProducts}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.ADD_EDIT_PRODUCT}
//                       component={AddEditProduct}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.PRODUCT}
//                       component={SingleProduct}
//                       log_required={'any'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.RECEIVER_COMPANY_INFO}
//                       component={ReceiverCompany}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.EDIT_RECEIVER}
//                       component={EditReceiverInfo}
//                       log_required={'receiver'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.CARRIER_DASHBOARD}
//                       component={CarrierDashBoard}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MATCHING_RESERVATIONS}
//                       component={MatchingReservations}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.NEW_BOOKING}
//                       component={NewBooking}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.NEW_BOOKING_LOCATION_AND_SHIPPER}
//                       component={BookingLocationAndShipper}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.MANAGE_RECEIVERS}
//                       component={ManageReceivers}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.DISPLAY_APPROVED_RECEIVER_INFO}
//                       component={DisplayApprovedReceiverInfo}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.DISPLAY_UNAPPROVED_RECEIVER_INFO}
//                       component={DisplayUnapprovedReceiverInfo}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.REQUEST_ACCESS}
//                       component={RequestAccess}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.CARRIER_COMPANY_INFO}
//                       component={CarrierCompany}
//                       log_required={'carrier'}
//                     />
//                     <ProtectedRoute
//                       path={PageURL.EDIT_CARRIER}
//                       component={EditCarrierInfo}
//                       log_required={'carrier'}
//                     />
//                   </Switch>
//                 </CSSTransition>
//               </TransitionGroup>
//             )}
//           />
//         </div>
//       </StripeProvider>
//     )
//   }
// }
