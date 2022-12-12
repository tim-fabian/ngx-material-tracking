import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseTrackingMetadata, BaseTrackingService } from '../services/base-tracking.service';
import { BaseCustomTrackingMetadata, CustomTrackingService } from '../services/custom-tracking.service';
import { TrackingEvent } from './event.model';
import { TrackingVisit } from './visit.model';

// eslint-disable-next-line jsdoc/require-jsdoc
type BaseTrackingServiceClassType<
    TrackingMetadata extends BaseTrackingMetadata
> = new (router: Router, metadataDefaultValue?: Omit<TrackingMetadata, 'createdAt'>) => BaseTrackingService<TrackingMetadata>

// eslint-disable-next-line jsdoc/require-jsdoc
type CustomBaseTrackingServiceClassType<
    TrackingMetadata extends BaseCustomTrackingMetadata,
    TrackingVisitType extends TrackingVisit,
    TrackingEventType extends TrackingEvent
> = new (
    router: Router,
    http: HttpClient,
    metadataDefaultValue?: Omit<TrackingMetadata, 'createdAt'>,
) => CustomTrackingService<TrackingMetadata, TrackingVisitType, TrackingEventType>;

/**
 * Contains information about a tracking service.
 * Used in the gdpr-dialog.
 */
export interface Tracking<
    TrackingMetadata extends BaseTrackingMetadata = BaseTrackingMetadata,
    CustomTrackingMetadata extends BaseCustomTrackingMetadata = BaseCustomTrackingMetadata,
    TrackingVisitType extends TrackingVisit = TrackingVisit,
    TrackingEventType extends TrackingEvent = TrackingEvent
> {
    /**
     * The name of the tracking service.
     * Gets displayed in the gdpr-dialog.
     */
    name: string,
    /**
     * The description of the tracking service.
     * Should contain information about what is tracked an who receives the data.
     * Gets displayed in the gdpr-dialog.
     */
    description: string,
    /**
     * The service that is handling the tracking.
     */
    // eslint-disable-next-line max-len
    TrackingServiceClass: BaseTrackingServiceClassType<TrackingMetadata> | CustomBaseTrackingServiceClassType<CustomTrackingMetadata, TrackingVisitType, TrackingEventType>
}