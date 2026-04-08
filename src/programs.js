export const PROGRAMS = [
  {
    title: "1. Circular Queue Using Array",
    filename: "CircularQueueUsingArr.exe",
    code: `#include <stdio.h>
#define max 5
int Display();

int arr[max], f = -1, r = -1;
int ch = 1;

int Enqueue()
{
    int value;

    if ((r + 1) % max == f)
    {
        printf("Q is full \\n");
        Display();
        return 0;
    }
    else
    {
        printf("Enter value to insert: ");
        scanf("%d", &value);
        if (f == -1)
        {
            f = 0;
        }
        r = (r + 1) % max;
        arr[r] = value;
        printf("%d inserted into queueue \\n", value);
    }
}

void Dequeue()
{

    if (f == -1 && r == -1)
    {
        printf("Q is empty \\n");
    }
    else if (f == r)
    {
        printf("%d", arr[f]);
        f = -1;
        r = -1;
    }
    else
    {
        printf("%d", arr[f]);
        f = (f + 1) % max;
    }
}

int Display()
{
    if (f == -1 && r == -1)
    {
        printf("Q is empty");
    }
    else
    {
        int i = f;
        while (1)
        {
            printf("%d ", arr[i]);
            if (i == r)
                break;
            i = (i + 1) % max;
        }
        printf("\\n");
    }

    return 0;
}

int main()
{
    int opt, ch=1;

    while (ch=1)
    {
        printf("Choose type of operation: \\n");

        printf("1. Enqueue \\n");
        printf("2. Dequeue \\n");
        printf("3. Display \\n");
        printf("4. Terminate\\n");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Enqueue();
            break;
        case 2:
            Dequeue();
            break;
        case 3:
            Display();
            return 0;
        default:
            printf("Invalid inut\\n");
        }
    }
    printf("want to continue (1/0) :");
    scanf("%d", &ch);
    return 0;
}
`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "2. Priority Queue",
    filename: "PriorityQueue.exe",
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 5

struct PQ
{
    int data;
    int priority;
};

struct PQ arr[MAX];
int rear = -1, j, pos = -1;

void Add()
{
    if (rear == MAX - 1)
    {
        printf("Array is full\\n");
        return;
    }
    else
    {
        rear++;
        printf("data: ");
        scanf("%d", &arr[rear].data);
        printf("priority: ");
        scanf("%d", &arr[rear].priority);
    }
}

void Remove()

{
    if (rear == -1)
    {
        printf("Array is empty");
    }
    else
    {
        for (int i = 0; i <= rear; i++)
        {
            if (arr[i].priority > pos)
            {
                pos = arr[i].priority;
                j = i;
            }
        }
        if (j < rear)
        {
            for (int i = j; i < 4; i++)
            {
                arr[i].data = arr[i + 1].data;
                arr[i].priority = arr[i + 1].priority;
            }
        }
        rear--;
    }
}

void Display()
{
    if (rear == -1)
    {
        printf("Array is empty");
    }
    else
    {
        for (int i = 0; i <= rear; i++)
        {
            printf("%d ", arr[i].data);
        }
        printf("\\n");
    }
}

int main()
{
    int opt;

    while (1)
    {
        printf("1. Add\\n");
        printf("2. Remove\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            Display();
            break;
        case 4:
            return 0;
        default:
            printf("Choose properly");
        }
    }
    return 0;
}`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "3. Queue Using Array",
    filename: "QueueUsingArr.exe",
    code: `#include <stdio.h>
#include <stdlib.h>
#define MAX 5

int arr[MAX];
int front = -1, rear = -1;

void Add()
{
    // Check if the queue has reached the end of the array
    if (rear == MAX - 1)
    {
        printf("Queue is full\\n");
    }
    else
    {
        // If it's the very first element being added, set front to 0
        if (front == -1)
        {
            front = 0;
        }
        rear++;
        printf("Enter data: ");
        scanf("%d", &arr[rear]);
        printf("%d added to the queue\\n", arr[rear]);
    }
}

void Remove()
{
    // Check if the queue is empty
    if (front == -1 || front > rear)
    {
        printf("Queue is empty\\n");
    }
    else
    {
        printf("Removed %d\\n", arr[front]);
        front++; // Move the front pointer forward to "remove" the element
        
        // If front passes rear, the queue is now empty. Reset both pointers.
        if (front > rear)
        {
            front = -1;
            rear = -1;
        }
    }
}

void Display()
{
    if (front == -1 || front > rear)
    {
        printf("Queue is empty\\n");
    }
    else
    {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++)
        {
            printf("%d ", arr[i]);
        }
        printf("\\n");
    }
}

int main()
{
    int opt, ch=1;

    while (ch = 1)
    {
        printf("\\n1. Add\\n");
        printf("2. Remove\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");
        printf("Choose option: ");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            Display();
            break;
        case 4:
            return 0;
        default:
            printf("Choose properly\\n");
        }
        printf("Want t continue (1/0)");
        scanf("%d", &ch);
    }
    return 0;
}`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "4. Stack Using Array",
    filename: "stackUsingArr.exe",
    code: `#include <stdio.h>
#define MAX 5

int arr[MAX], top = -1;

void Add()
{
    int temp;
    if (top == MAX - 1)
    {
        printf("Stack is full");
    }
    else
    {
        top++;
        printf("Enter the value: ");
        scanf("%d", &temp);
        arr[top] = temp;
    }
}

void Remove()
{
    int temp;
    if (top == -1)
    {
        printf("Stack is empty");
    }
    else
    {
        top--;
    }
}

void Display()
{
    if(top == -1)
        {
            printf("Stack is empty");
        }
    else
    {
        for(int i=top; i>=0; i--){
            printf("%d ", arr[i]);
        }
    }
    printf("\\n");
}

int main()
{
    int opt;

    while (1)
    {
        printf("1. Add\\n");
        printf("2. Remove\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            Display();
            break;
        case 4:
            return 0;
        default:
            printf("Choose properly");
        }
    }
    return 0;
}`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "5. Circular Queue Using Linked List",
    filename: "CircularQueueUsingLinkedList.exe",
    code: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *temp, *head = NULL, *tail = NULL;

void Add()
{
    temp = (struct node *)malloc(sizeof(struct node));

    printf("Enter value: ");
    scanf("%d", &temp->data);
    
    if (head == NULL)
    {
        head = temp;
        tail = temp;
    }
    else if (head == tail)
    {
        tail = temp;
        head->next = tail;
        tail->next = head;
    }
    else
    {
        tail -> next = temp;
        temp -> next = head;
        tail = temp;
    }
}

void Remove()
{
    if (head == NULL)
    {
        printf("Q is empty.");
    }
    else if (head == tail)
    {
        head = NULL;
        tail = NULL;
    }
    else
    {
        head = head->next;
        tail -> next = head;
    }
}

void Display()
{
    struct node *trav = head;
    if (head == NULL)
    {
        printf("Q is empty\\n");
        return;
    }
    
    while (trav -> next != head)
    {
        printf("%d -> ", trav->data);
        trav = trav -> next;
    }
    //Print last node
    printf("%d\\n", trav->data);
}

void main()
{
    int ch = 1, opt;
    while (ch)
    {
        printf("1. Add element\\n");
        printf("2. Remove element\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            Display();
            break;
        case 4:
            printf("Terminate ");
            return;
        default:
            printf("Choose properly");
        }
    }
}`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "6. Double Ended Linked List",
    filename: "DoubleEndedLinkedList.exe",
    code: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    struct node *prev;
    int data;
    struct node *next;
};

struct node *head = NULL, *tail = NULL;

void Add()
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    printf("Enter value: ");
    scanf("%d", &temp->data);
    temp->next = NULL;

    if (head == NULL)
    {
        head = temp;
        tail = temp;
    }
    else if (head == tail)
    {
        temp->prev = head;
        head->next = temp;
        tail = temp;
    }
    else
    {
        temp->prev = tail;
        tail->next = temp;
        tail = temp;
    }
}

void Remove()
{
    if (head == NULL)
    {
        printf("Q is empty.");
    }
    else if (head == tail)
    {
        head = NULL;
        tail = NULL;
    }
    else
    {
        head = head->next;
        head->prev = NULL;
    }
}

void Display()
{
    if (head == NULL)
    {
        printf("Q is empty.");
    }
    else
    {
        struct node *temp = head;
        while (temp != NULL)
        {
            printf("%d ", temp->data);
            temp = temp->next;
        }
    }
}

void main()
{
    int ch = 1, opt;

    while (ch)
    {
        printf("1. Add element\\n");
        printf("2. Remove Element\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            Display();
            break;
        case 4:
            return;
        default:
            printf("Choose properly");
        }
        printf("\\nWant to continue (1/0): ");
        scanf("%d", &ch);
    }
}`,
    output: `Program executed successfully.`
  },
  {
    title: "7. Queue Using Linked List",
    filename: "QueueUsingLinkedList.exe",
    code: `#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL, *tail = NULL, *temp, *trave=NULL;

int Add()
{
    temp = (struct node *)malloc(sizeof(struct node));

    printf("\\nEnter data: ");
    scanf("%d", &temp->data);
    temp->next = NULL;

    if (head == NULL)
    {
        head = temp;
        tail = temp;
    }
    else
    {
        tail->next = temp;
        tail = temp;
    }
}

void Remove()
{
    if (head == NULL)
    {
        printf("Q is empty");
    }
    else if (head == tail)
    {
        printf("%d", head->data);
        head = NULL;
        tail = NULL;
    }
    else
    {
        printf("%d", head->data);
        head = head->next;
    }
}

void Display()
{
    trave = head;
    if (head == NULL)
    {
        printf("Q is empty");
        return;
    }
    while (trave != NULL)
    {
        printf("%d ->", trave->data);
        trave = trave->next;
    }
    printf("\\n");
}

void main()
{
    int ch = 1, opt;
    while (ch=1)
    {
        printf("1. Add node to the queue\\n");
        printf("2. Remove node from the queue\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");

        scanf("%d", &opt);
        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            Display();
            break;
        case 4:
            return;
        default:
            printf("Choose properly\\n");
        }
        printf("Want to continue (1/0): ");
        scanf("%d", &ch);
    }
}`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "8. Reverse L Inked List",
    filename: "ReverseLInkedList.exe",
    code: `#include <stdio.h>
#include <stdlib.h>

void Add();
void Display();
void Reverse();

struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL, *tail = NULL, *temp, *trav;

void Add()
{
    temp = (struct node *)malloc(sizeof(struct node));
    printf("Enter value: ");
    scanf("%d", &temp->data);
    temp->next = NULL;
    if (head == NULL)
    {
        head = temp;
        tail = temp;
    }
    else
    {
        tail->next = temp;
        tail = temp;
    }
    Display();
}

void Reverse()
{
    struct node *prev = NULL;
    struct node *curr = head;
    struct node *next = NULL;

    if (head == NULL)
    {
        printf("List is empty\\n");
        return;
    }

    if (head == tail)
    {
        printf("Only one element: %d\\n", head->data);
        return;
    }

    while (curr != NULL)
    {
        next = curr->next; // store next
        curr->next = prev; // reverse link
        prev = curr;       // move prev
        curr = next;       // move curr
    }

    head = prev; // new head

    printf("List reversed successfully\\n");
    Display();
}

void Display()
{
    struct node *trave = head;

    while (trave != NULL)
    {
        printf("%d ", trave->data);
        trave = trave->next;
    }
    printf("\\n");
}

void main()
{
    int opt;

    while (1)
    {
        printf("1. Add\\n");
        printf("2. Reverse\\n");
        printf("3. Display\\n");
        printf("4. Terminate\\n");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Reverse();
            break;
        case 3:
            Display();
            return;
        case 4:
            return;
        }
    }
}`,
    output: `Program executed successfully.`
  },
  {
    title: "9. Stack Using Linked List",
    filename: "StackUsingLinkedList.exe",
    code: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *ptr;
};

struct node *start = NULL;

void Add()
{
    struct node *temp, *trav;
    temp = (struct node *)malloc(sizeof(struct node));

    printf("Enter a value: ");
    scanf("%d", &temp->data);

    temp->ptr = NULL;

    if (start == NULL)
    {
        start = temp;
    }
    else
    {
        trav = start;
        while (trav->ptr != NULL)
        {
            trav = trav->ptr;
        }
        trav->ptr = temp;
    }
}

void Display()
{
    struct node *trav;

    if (start == NULL)
    {
        printf("List is empty\\n");
    }
    else
    {
        trav = start;
        while (trav != NULL)
        {
            printf("%d -> ", trav->data);
            trav = trav->ptr;
        }
        printf("NULL\\n");
    }
}

void Remove()
{
    struct node *trav;

    if (start == NULL)
    {
        printf("List is empty\\n");
    }
    else
    {
        trav = start;        // store first node
        start = start->ptr;  // move start to next node
        free(trav);          // delete old node
        printf("Node removed\\n");
    }

}

int main()
{
    int ch = 1, op;

    while (ch)
    {
        printf("\\n1. Add");
        printf("\\n2. Display");
        printf("\\n3. Remove");
        printf("\\nEnter your choice: ");
        scanf("%d", &op);

        switch (op)
        {
        case 1:
            Add();
            break;
        case 2:
            Display();
            return 0;
        case 3:
            Remove();
            break;
        default:
            printf("Choose properly\\n");
        }
    }

    printf("Want to continue (1/0): ");
    scanf("%d", &ch);

    return 0;
}
`,
    output: `1. Add\n2. Remove\n3. Display\nChoose option: 1\nAdded successfully.\nChoose option: 3\nElements: 10`
  },
  {
    title: "10. Binary Search",
    filename: "BinarySearch.exe",
    code: `#include<stdio.h>
#include<stdlib.h>

int BinarySearch(int arr[], int n, int target)
{
    int first = 0, last = n-1, mid;
    
    while(first <= last)
    {
        mid = first + (last - first) /2;
        if(arr[mid] == target)
        {
            return mid;
        }
        else 
        if(arr[mid] < target)
        {
            first = mid + 1;
        }
        else
        {
            last = mid -1;
        }
    }
    return -1;
}

int main()
{
    int arr[] = {1,4,6,9,12,34,45,46};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 34;
    int result = BinarySearch(arr, n, target);
    if(result == -1)
    {
        printf("Element not present in array");
    }
    else
    {
        printf("Element %d is present at index of %d" ,target, result);
    }
}`,
    output: `Element found at index 3`
  },
  {
    title: "11. Index Sequential Search",
    filename: "IndexSequentialSearch.exe",
    code: `#include <stdio.h>
#include <math.h>

int main()
{
    int n, key;
    int arr[] = {1,2,3,4,5,6,7,8,9};
    key = 6;
    
    
    int blockSize = sqrt(n);   // using math.h
    int i, j;

    // Step 1: Find correct block
    for(i = 0; i < n; i += blockSize)
    {
        if(arr[i] <= key && arr[i + blockSize - 1] >= key)
        {
            // Step 2: Linear search inside block
            for(j = i; j < i + blockSize && j < n; j++)
            {
                if(arr[j] == key)
                {
                    printf("Element found at position %d", j + 1);
                    return 0;
                }
            }
        }
    }

    printf("Element not found");
    return 0;
}`,
    output: `Element found at index 3`
  },
  {
    title: "12. Sequential Search",
    filename: "SequentialSearch.exe",
    code: `#include <stdio.h>

int search(int arr[], int target, int n)
{
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    int arr[] = {1, 5, 35, 2, 45, 74};
    int target = 1;

    int n = sizeof(arr)/sizeof(arr[0]);

    int result = search(arr, target, n);

    if (result == -1)
    {
        printf("Element is not present in Array");
    }
    else
    {
        printf("Element is present at index %d", result);
        return 0;
    }
}`,
    output: `Element found at index 3`
  },
  {
    title: "13. Bubble Sort",
    filename: "BubbleSort.exe",
    code: `#include <stdio.h>
void main()
{
    int arr[100], n, i, j, temp;

    // Input number of elements
    printf("Enter number of elements: ");
    scanf("%d", &n);

    // Input array elements
    printf("Enter %d elements:\\n", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    // Bubble Sort
    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // Swap
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Display sorted array
    printf("Sorted array:\\n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}`,
    output: `Sorted array: 1 2 3 4 5 6 7 8 9`
  },
  {
    title: "14. Heap Sort",
    filename: "HeapSort.exe",
    code: `#include <stdio.h>

void heapify(int arr[], int n, int i);
void heapSort(int arr[], int n);

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements:\\n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    heapSort(arr, n);

    printf("Sorted array:\\n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}

void heapSort(int arr[], int n)
{
    int i, temp;

    // Build max heap
    for (i = n / 2 - 1; i >= 0; i--)
    {
        heapify(arr, n, i);
    }

    // Extract elements from heap
    for (i = n - 1; i > 0; i--)
    {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

void heapify(int arr[], int n, int i)
{
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    int temp;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i)
    {
        temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);
    }
}`,
    output: `Sorted array: 1 2 3 4 5 6 7 8 9`
  },
  {
    title: "15. Insertion Sort",
    filename: "InsertionSort.exe",
    code: `#include<stdio.h>

void main()
{
    int arr[] = {1,4,2,76,23,12,664,7,7654,33};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    for(int i=1; i<n; i++)
    {
        int key = arr[i];
        int j = i -1;

        while(j>=0 && arr[j] > key)
        {
            arr[j+1] = arr[j];
            j = j -1;
        }
        arr[j+1] = key;
    }

    for(int i=0; i<n; i++)
    {
        printf("%d ", arr[i]);
    }

}`,
    output: `Sorted array: 1 2 3 4 5 6 7 8 9`
  },
  {
    title: "16. Merge Sort",
    filename: "MergeSort.exe",
    code: `#include <stdio.h>

void merge(int arr[], int l, int m, int r);
void mergeSort(int arr[], int l, int r);

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements:\\n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    mergeSort(arr, 0, n - 1);

    printf("Sorted array:\\n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}

void mergeSort(int arr[], int l, int r)
{
    if (l < r)
    {
        int m = (l + r) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

void merge(int arr[], int l, int m, int r)
{
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[100], R[100];

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];

    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;

    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}`,
    output: `Sorted array: 1 2 3 4 5 6 7 8 9`
  },
  {
    title: "17. Quick Sort",
    filename: "QuickSort.exe",
    code: `#include <stdio.h>

void quickSort(int arr[], int low, int high);
int partition(int arr[], int low, int high);

int main()
{
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements:\\n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    quickSort(arr, 0, n - 1);

    printf("Sorted array:\\n");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}

void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high)
{
    int pivot = arr[high];
    int i = low - 1;
    int j, temp;

    for (j = low; j < high; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}`,
    output: `Sorted array: 1 2 3 4 5 6 7 8 9`
  },
  {
    title: "18. Selection Sort",
    filename: "SelectionSort.exe",
    code: `#include <stdio.h>

void main()
{
    int n, min, temp, j;

    printf("Enter the size of the array : ");
    scanf("%d", &n);

    int arr[n];

    for (int i = 0; i < n; i++)
    {
        printf("Enter element at %d index : ", i);
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < n - 1; i++)
    {
        min = i;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min])
            {
                min = j;
            }
        }
        if (min != i)
        {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}`,
    output: `Sorted array: 1 2 3 4 5 6 7 8 9`
  },
  {
    title: "19. Kruska Algo",
    filename: "KruskaAlgo.exe",
    code: `#include <stdio.h>

void Kruskal(int n, int cost[20][20])
{
    int i, j, min, u, v;
    int parent[20];
    int minCost = 0, edges = 0;

    for(i = 0; i < n; i++)
        parent[i] = -1;

    while(edges < n - 1)
    {
        min = 999;

        for(i = 0; i < n; i++)
        {
            for(j = 0; j < n; j++)
            {
                if(cost[i][j] < min)
                {
                    min = cost[i][j];
                    u = i;
                    v = j;
                }
            }
        }

        int rootU = u;
        while(parent[rootU] != -1)
            rootU = parent[rootU];

        int rootV = v;
        while(parent[rootV] != -1)
            rootV = parent[rootV];

        if(rootU != rootV)
        {
            printf("\\nEdge added: %d <---> %d (Cost: %d)", u, v, min);
            minCost += min;
            parent[rootV] = rootU;
            edges++;
        }

        cost[u][v] = cost[v][u] = 999;
    }

    printf("\\nTotal Minimum Cost = %d\\n", minCost);
}

int main()
{
    int n, cost[20][20], i, j;

    printf("Enter number of nodes: ");
    scanf("%d", &n);

    for(i = 0; i < n; i++)
    {
        for(j = i + 1; j < n; j++)
        {
            printf("Enter cost for %d-------%d: ", i, j);
            scanf("%d", &cost[i][j]);
            cost[j][i] = cost[i][j];
        }
    }

    for(i = 0; i < n; i++)
        cost[i][i] = 999;

    Kruskal(n, cost);

    return 0;
}`,
    output: `Program executed successfully.`
  },
  {
    title: "20. Prims Algo",
    filename: "PrimsAlgo.exe",
    code: `#include <stdio.h>

void Prims(int n, int cost[20][20])
{
    int i, j, u = -1, v = -1, min, minCost = 0;
    int visited[20] = {0};

    visited[0] = 1;

    for (int edgeCount = 0; edgeCount < n - 1; edgeCount++)
    {
        min = 999;

        for (i = 0; i < n; i++)
        {
            if (visited[i] == 1)
            {
                for (j = 0; j < n; j++)
                {
                    if (visited[j] == 0 && cost[i][j] < min)
                    {
                        min = cost[i][j];
                        u = i;
                        v = j;
                    }
                }
            }
        }

        if (u != -1 && v != -1)
        {
            printf("\\nEdge added: %d <---> %d (Cost: %d)", u, v, min);
            minCost += min;
            visited[v] = 1;
        }
    }

    printf("\\nTotal Minimum Cost = %d\\n", minCost);
}

int main()
{
    int n, cost[20][20], i, j;

    printf("Enter no. of nodes: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            printf("Enter cost for %d-------%d: ", i, j);
            scanf("%d", &cost[i][j]);
            cost[j][i] = cost[i][j];   // Make matrix symmetric
        }
    }

    for (i = 0; i < n; i++)
    {
        cost[i][i] = 999;   // No self loop
    }

    printf("\\nCost Matrix:\\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            printf("%d ", cost[i][j]);
        }
        printf("\\n");
    }

    Prims(n, cost);

    return 0;
}`,
    output: `Program executed successfully.`
  },
  {
    title: "21. Tree",
    filename: "Tree.exe",
    code: `#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node *root = NULL;

// Create node
struct node* createNode(int value)
{
    struct node *temp = (struct node*)malloc(sizeof(struct node));
    temp->data = value;
    temp->left = NULL;
    temp->right = NULL;
    return temp;
}

// Add node (simple insertion)
void Add()
{
    int value;
    printf("\\nEnter data: ");
    scanf("%d", &value);

    if (root == NULL)
    {
        root = createNode(value);
        return;
    }

    struct node *temp = root;

    while (1)
    {
        // Insert left
        if (temp->left == NULL)
        {
            temp->left = createNode(value);
            break;
        }
        // Insert right
        else if (temp->right == NULL)
        {
            temp->right = createNode(value);
            break;
        }
        else
        {
            temp = temp->left; // move left side
        }
    }
}

// Inorder Traversal
void Display(struct node *temp)
{
    if (temp != NULL)
    {
        Display(temp->left);
        printf("%d ", temp->data);
        Display(temp->right);
    }
}

// Remove (simple delete root)
void Remove()
{
    if (root == NULL)
    {
        printf("Tree is empty\\n");
    }
    else
    {
        printf("Removed root node: %d\\n", root->data);
        free(root);
        root = NULL;
    }
}

int main()
{
    int opt, ch = 1;

    while (ch)
    {
        printf("\\n1. Add node\\n");
        printf("2. Remove root node\\n");
        printf("3. Display (Inorder)\\n");
        printf("4. Terminate\\n");
        printf("Choose option: ");
        scanf("%d", &opt);

        switch (opt)
        {
        case 1:
            Add();
            break;
        case 2:
            Remove();
            break;
        case 3:
            if (root == NULL)
                printf("Tree is empty\\n");
            else
            {
                printf("Tree elements: ");
                Display(root);
                printf("\\n");
            }
            break;
        case 4:
            return 0;
        default:
            printf("Choose properly\\n");
        }

        printf("Want to continue (1/0): ");
        scanf("%d", &ch);
    }

    return 0;
}`,
    output: `Program executed successfully.`
  },
];
