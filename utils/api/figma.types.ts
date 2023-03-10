export interface LibraryPublishEvent {
  created_components: Array<unknown>;
  created_styles: Array<unknown>;
  deleted_components: Array<unknown>;
  deleted_styles: Array<unknown>;
  description: string;
  event_type: 'LIBRARY_PUBLISH';
  file_key: string;
  file_name: string;
  modified_components: Array<unknown>;
  modified_styles: Array<unknown>;
  passcode: string;
  timestamp: string;
  triggered_by: {
    id: string;
    handle: string;
  };
  webhook_id: string;
}

export interface FigmaVersionEvent {
  created_at: string;
  description: string;
  id: string;
  label: string;
  thumbnail_url: string;
  user: {
    id: string;
    handle: string;
  };
}
export interface FigmaComponentUpdate {
  type?: 'PATCH' | 'MINOR' | 'MAJOR';
  component?: string;
  description?: string;
}
