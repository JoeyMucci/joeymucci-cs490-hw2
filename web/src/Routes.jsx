// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import FunLayout from 'src/layouts/FunLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="RunningPerformances" titleTo="runningPerformances" buttonLabel="New RunningPerformance" buttonTo="newRunningPerformance">
        <Route path="/running-performances/new" page={RunningPerformanceNewRunningPerformancePage} name="newRunningPerformance" />
        <Route path="/running-performances/{id:Int}/edit" page={RunningPerformanceEditRunningPerformancePage} name="editRunningPerformance" />
        <Route path="/running-performances/{id:Int}" page={RunningPerformanceRunningPerformancePage} name="runningPerformance" />
        <Route path="/running-performances" page={RunningPerformanceRunningPerformancesPage} name="runningPerformances" />
      </Set>
      <Set wrap={FunLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/effort/{id:Int}" page={EffortPage} name="effort" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
