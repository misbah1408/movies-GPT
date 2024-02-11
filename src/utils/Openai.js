import OpenAI from 'openai';
import { GPT_AI } from './Constants';

const Openai = new OpenAI({
  apiKey: GPT_AI,
  dangerouslyAllowBrowser: true ,
});

export default Openai;