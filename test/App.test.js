import 'jsdom-global/register'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import App from '../src/App'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter() });

const mockStore =configureMockStore();

//mock store data to test
const store = mockStore(
  {
      hoodieWeekOrders: [10,4,0,9,1,0,3],
      fittedCapWeekOrders: [0,7,10,0,6,5,2],
      braceletWeekOrders: [0,10,5,3,10,6,5],
      totalWeekOrders: 96,
      completedOrders: 87,
      totalSales: 5605.95,
      hoodieOrderPercent: 28,
      fittedCapOrderPercent: 31,
      braceletOrderPercent: 40,
      completeOrderPercent: 90
    }
)


//Simple unit test to check if root app will load
describe('<App />', () => {
  it('should run without crashing', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    expect(App.prototype).to.not.be.null;
  });
});
