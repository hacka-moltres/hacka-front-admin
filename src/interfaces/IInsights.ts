type IAction = 'get-more' | 'do-it';

export interface IInsights {
  id: string;
  title: string;
  type: string;
  description: string;
  descriptionTitle: string;
  value: number;
  valueText: string;
  action?: IAction[];
}
