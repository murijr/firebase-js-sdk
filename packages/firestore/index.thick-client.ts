/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import firebase from '@firebase/app';
import { configureForFirebase } from './src/platform/config';
import './src/platform_browser/browser_init';

import * as types from '@firebase/firestore-types';
import { FirebaseNamespace } from '@firebase/app-types';

import { name, version } from './package.json';

export { FirestoreError, Code } from './src/util/error';
export { defaulted } from './src/util/obj';
export { startMemoryPersistence } from './src/core/firestore_client';
export { ListenSequence } from './src/core/listen_sequence';
export { DocumentKey } from './src/model/document_key';
export { assert, fail } from './src/util/assert';
export { TimerId } from './src/util/async_queue';
export { debug, error } from './src/util/log';
export { decode, encode } from './src/local/encoded_resource_path';
export { primitiveComparator, immediateSuccessor } from './src/util/misc';
export { ResourcePath } from './src/model/path';
export { SnapshotVersion } from './src/core/snapshot_version';
export { MutationBatch, BATCHID_UNKNOWN } from './src/model/mutation_batch';
export { SortedSet } from './src/util/sorted_set';
export { PersistencePromise } from './src/local/persistence_promise';
export { getUA } from '@firebase/util';
export { Deferred } from './src/util/promise';
export { Timestamp } from './src/api/timestamp';
export {
  documentKeySet,
  nullableMaybeDocumentMap,
  documentMap,
  maybeDocumentMap
} from './src/model/collections';
export { TargetIdGenerator } from './src/core/target_id_generator';
export { NoDocument, Document, UnknownDocument } from './src/model/document';
export { SortedMap } from './src/util/sorted_map';
export { RemoteDocumentChangeBuffer } from './src/local/remote_document_change_buffer';
export { ObjectMap } from './src/util/obj_map';
export { MemoryCollectionParentIndex } from './src/local/memory_index_manager';
export { TargetData, TargetPurpose } from './src/local/target_data';
export {
  LruGarbageCollector,
  LruParams
} from './src/local/lru_garbage_collector';
export { PersistenceTransaction } from './src/local/persistence';
export { JsonProtoSerializer } from './src/remote/serializer';
export {
  WebStorageSharedClientState,
  MemorySharedClientState
} from './src/local/shared_client_state';

export function registerFirestore(instance: FirebaseNamespace): void {
  configureForFirebase(instance);
  instance.registerVersion(name, version);
}

registerFirestore(firebase);

declare module '@firebase/app-types' {
  interface FirebaseNamespace {
    firestore?: {
      (app?: FirebaseApp): types.FirebaseFirestore;
      Blob: typeof types.Blob;
      CollectionReference: typeof types.CollectionReference;
      DocumentReference: typeof types.DocumentReference;
      DocumentSnapshot: typeof types.DocumentSnapshot;
      FieldPath: typeof types.FieldPath;
      FieldValue: typeof types.FieldValue;
      Firestore: typeof types.FirebaseFirestore;
      GeoPoint: typeof types.GeoPoint;
      Query: typeof types.Query;
      QueryDocumentSnapshot: typeof types.QueryDocumentSnapshot;
      QuerySnapshot: typeof types.QuerySnapshot;
      Timestamp: typeof types.Timestamp;
      Transaction: typeof types.Transaction;
      WriteBatch: typeof types.WriteBatch;
      setLogLevel: typeof types.setLogLevel;
    };
  }
  interface FirebaseApp {
    firestore?(): types.FirebaseFirestore;
  }
}
