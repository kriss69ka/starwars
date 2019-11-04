import {findHighest} from "./findHighest";
import data from "./Data.json";

it('returns highest person', () => {
    expect(findHighest(data)).toMatchSnapshot();
})