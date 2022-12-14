import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseCustomTrackingMetadata, CustomTrackingService, GdprCategory, TrackingEvent, TrackingVisit } from 'ngx-material-tracking';

@Injectable({ providedIn: 'root' })
// eslint-disable-next-line jsdoc/require-jsdoc
export class InternalAnalyticsService extends CustomTrackingService<BaseCustomTrackingMetadata, TrackingVisit, TrackingEvent> {
    readonly DOMAIN: string = 'http://localhost';
    readonly VISIT_API_URL: string = 'http://localhost:3000/visits';
    readonly EVENT_API_URL: string = 'http://localhost:3000/events';
    readonly METADATA_KEY: string = 'internalAnalytics';
    readonly GDPR_CATEGORY: GdprCategory = GdprCategory.ENABLED_BY_DEFAULT;

    constructor(router: Router, http: HttpClient) {
        super(router, http);
    }
}