# Application Features

Users can create Rooms and Voice or VideoChat with text chat.

### Rooms

- CRUD.
- Modify permissions.
- Start call.
- End call.
- Send text messages.
- Auto transcribe after ending voice chat.
- Auto create summary in README.md.

### Users

- Twitter, Facebook, Github signup/signin.

### Data analytics platform

- Cloud Functions -> BigQuery

## Realtime DB Design

```json
users
  - id
    - name
    - rooms
      - id
      - voice_chats
        - id
      - text_chats
        - id
rooms
  - id
    - name
    - users
      - id
    - voice_chats
      - user_id
        - voice_chat_id
    - text_chats
      - user_id
        - text_chat_id
voice_chats
text_chats
```