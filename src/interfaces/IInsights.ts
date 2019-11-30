type IAction = 'get-more' | 'do-it';

export interface IInsights {
  id: string;
  type: string;
  description: string;
  action?: IAction[];
}
