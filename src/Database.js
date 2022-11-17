import {Platform} from "react-native";
import * as SQLite from "expo-sqlite";

export class Database {

    constructor() {
        if (Platform.OS === "web") {
            return {
                transaction: () => {
                    return {
                        executeSql: () => {},
                    };
                },
            };
        }

        const db = SQLite.openDatabase("db.db");
        return db;
    }

   add(text) {
    // is text empty?
    if (text === null || text === "") {
        return false;
    }
    
    this.db.transaction(
        (tx) => {
            tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
            tx.executeSql("select * from items", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
            );
        },
        null,
        this.forceUpdate
    );
    }
}