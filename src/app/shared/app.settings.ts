import {env } from '../../config/env'

export class AppSettings {
    public static APPLICATION_TITLE = window['envs']['APPLICATION_TITLE'];
    public static BASE_URL = window['envs']['BASE_URL'];
    public static UPLOAD_URL = window['envs']['UPLOAD_URL'];
    public static UPLOAD_MAX_SIZE = window['envs']['UPLOAD_MAX_SIZE'];
    public static UPLOAD_FORMATS_ALLOWED = window['envs']['UPLOAD_FORMATS_ALLOWED'];
    public static ROWS_ON_PAGE = window['envs']['ROWS_ON_PAGE'];
    public static ROWS_ON_PAGE_SET = window['envs']['ROWS_ON_PAGE_SET'];
    
}