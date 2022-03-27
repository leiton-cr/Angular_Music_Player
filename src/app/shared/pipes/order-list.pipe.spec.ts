import { Track } from './../../core/models/track.model';

import { OrderListPipe } from './order-list.pipe';
import * as rawData from '@data/tracks.json'

describe('OrderListPipe', () => {
  
  const {data} = (rawData as any).default;

  it('create an instance', () => {
    const pipe = new OrderListPipe();
   
    expect(pipe).toBeTruthy();
  });

  it('⭕ should enter and exit without error', () => {
  
    const pipe= new OrderListPipe();
    
    const result: Track[] = pipe.transform(data);

    expect(result).toEqual(data)

  });


  it('⭕ should order the list ASC', () => {
    
    //Arrange
    const pipe = new OrderListPipe();

    // Act
    const result: Track[] = pipe.transform(data, 'name', 'asc')

    // Assert
    expect(result[0]._id).toEqual(7)
    expect(result[result.length-1]._id).toEqual(6)

  });


});
