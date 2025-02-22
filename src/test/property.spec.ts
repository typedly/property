
import { Property } from '../lib';


type Example1 = Property.Add<{ firstName: 'a', surName: 'b' }, 'city', 'London'>;

