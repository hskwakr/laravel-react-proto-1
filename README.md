# laravel-react-proto-1

[\[簡単\]React x LaravelのSPAで作るチュートリアル①(環境構築編) - Qiita](https://qiita.com/morry_48/items/abd620f051fb4f36dcc2 "[簡単]React x LaravelのSPAで作るチュートリアル①(環境構築編) - Qiita")

## Local Development Environment

- Install dependencies with composer
    - https://laravel.com/docs/9.x/sail#installing-composer-dependencies-for-existing-projects
- Install dependencies with npm
    - `npm install`
- Generate API key
    - `./vendor/bin/sail php artisan key:generate`
- Migrate DB
    - `./vendor/bin/sail php artisan `
- Start server
    - `./vendor/bin/sail up -d`
    - `npm run dev`
- End server
    - `./vendor/bin/sail down`
