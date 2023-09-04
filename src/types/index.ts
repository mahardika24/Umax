export interface ColumnsData {
Update: Date;
Amount: Boolean;
Reach: Boolean;
Impressions: Boolean;
Frequency: Boolean;
RAR: Boolean;
CPC: Boolean;
CTR: Boolean;
OCLP: Boolean;
CPR: Boolean;
ATC: Boolean;
ROAS: Boolean; 
}
export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string
    options: OptionProps[];
}