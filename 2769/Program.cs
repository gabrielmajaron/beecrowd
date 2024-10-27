/*using Dijkstra.NET.Graph;
using Dijkstra.NET.ShortestPath;*/

//https://github.com/matiii/Dijkstra.NET

// teoria dos grafos
// https://www.youtube.com/watch?v=IIZOWRwKa_Q

using System;
using System.Collections.Generic;
using System.Linq;

#region dijkstra #
internal static class EnumerableExtensions
{
    public static void Each<T>(this IEnumerable<T> iterator, Action<T> action)
    {
        foreach (var t in iterator)
        {
            action(t);
        }
    }
}
public static class GraphExtensions
{
    /// <summary>
    /// Create graph with nodes
    /// </summary>
    /// <param name="nodes">Number of nodes</param>
    /// <returns>Graph(nodes)</returns>
    public static Graph ToGraph(this int nodes)
    {
        var g = new Graph();
        Enumerable.Range(0, nodes).Each(_ => g.AddNode());
        return g;
    }
}
public class Graph<T, TEdgeCustom> : IDijkstraGraph, IPageRankGraph, IGraph<T, TEdgeCustom>, IEnumerable<INode<T, TEdgeCustom>> where TEdgeCustom : IEquatable<TEdgeCustom>
{
    private readonly IDictionary<uint, Node<T, TEdgeCustom>> _nodes = new Dictionary<uint, Node<T, TEdgeCustom>>();

    /// <summary>
    /// Add node to graph
    /// </summary>
    /// <param name="graph">Graph</param>
    /// <param name="item">Item of node</param>
    /// <returns></returns>
    public static Graph<T, TEdgeCustom> operator +(Graph<T, TEdgeCustom> graph, T item)
    {
        graph.AddNode(item);
        return graph;
    }

    /// <summary>
    /// Get node from graph
    /// </summary>
    /// <param name="graph">Graph</param>
    /// <param name="node">Key of node</param>
    /// <returns>Node of graph</returns>
    public static Node<T, TEdgeCustom> operator >>(Graph<T, TEdgeCustom> graph, int node)
    {
        return (Node<T, TEdgeCustom>)graph[(uint)node];
    }

    /// <summary>
    /// Add node to graph
    /// </summary>
    /// <param name="item">Node</param>
    /// <returns>Key of node</returns>
    public uint AddNode(T item)
    {
        uint key = (uint)_nodes.Count + 1;
        AddNode(key, item);
        return key;
    }

    /// <summary>
    /// Connect node from with node to
    /// (from)-[cost, custom]->(to)
    /// </summary>
    /// <param name="from">First node</param>
    /// <param name="to">Second node</param>
    /// <param name="cost">Cost of connection</param>
    /// <param name="custom">Information saved in edge</param>
    /// <returns>Returns true if nodes connected</returns>
    public bool Connect(uint from, uint to, int cost, TEdgeCustom custom)
    {
        if (!_nodes.ContainsKey(from) || !_nodes.ContainsKey(to))
            return false;

        Node<T, TEdgeCustom> nodeFrom = _nodes[from];
        Node<T, TEdgeCustom> nodeTo = _nodes[to];

        nodeTo.AddParent(nodeFrom);
        nodeFrom.AddEdge(new Edge<T, TEdgeCustom>(nodeTo, cost, custom));

        return true;
    }

    public IEnumerator<INode<T, TEdgeCustom>> GetEnumerator()
    {
        return _nodes.Select(x => x.Value).GetEnumerator();
    }

    public INode<T, TEdgeCustom> this[uint node]
    {
        get
        {
            return _nodes[node];
        }
    }

    public int NodesCount
    {
        get
        {
            return _nodes.Count;
        }
    }

    public int EdgesCount(uint node)
    {
        return _nodes[node].EdgesCount;
    }

    public IEnumerable<uint> Parents(uint node)
    {
        return _nodes[node].Parents.Select(x => x.Key);
    }

    IEnumerator<uint> IEnumerable<uint>.GetEnumerator()
    {
        foreach (var node in _nodes)
        {
            yield return node.Key;
        }
    }

    public override string ToString()
    {
        return $"Graph({_nodes.Count})";
    }

    protected void AddNode(uint key, T item)
    {
        if (_nodes.ContainsKey(key))
            throw new InvalidOperationException("Node have to be unique.", new Exception("The same key of node."));

        _nodes.Add(key, new Node<T, TEdgeCustom>(key, item, this));
    }

    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        throw new NotImplementedException();
    }

    Action<Edge> IDijkstraGraph.this[uint node]
    {
        get
        {
            return _nodes[node].EachEdge;
        }
    }
}
public struct EdgeTemp<T, TCustom> where TCustom : IEquatable<TCustom>
{
    private readonly uint nodeFrom;
    private readonly uint nodeTo;
    private readonly Graph<T, TCustom> graph;
    private readonly int cost;

    internal EdgeTemp(uint nodeFrom, uint nodeTo, Graph<T, TCustom> graph) : this()
    {
        NodeFrom = nodeFrom;
        NodeTo = nodeTo;
        Graph = graph;
        Cost = int.MinValue;
    }

    internal EdgeTemp(uint nodeFrom, uint nodeTo, Graph<T, TCustom> graph, int cost) : this()
    {
        NodeFrom = nodeFrom;
        NodeTo = nodeTo;
        Graph = graph;
        Cost = cost;
    }

    /// <summary>
    /// Define cost of edge
    /// </summary>
    /// <param name="edge">Edge</param>
    /// <param name="cost">Cost of edge</param>
    /// <returns>Temporary edge</returns>
    public static EdgeTemp<T, TCustom> operator >>(EdgeTemp<T, TCustom> edge, int cost)
    {
        return new EdgeTemp<T, TCustom>(edge.NodeFrom, edge.NodeTo, edge.Graph, cost);
    }

    /// <summary>
    /// Create edge between two nodes
    /// </summary>
    /// <param name="edge">Edge</param>
    /// <param name="edgeCustom">Custom information in edge</param>
    /// <returns>True if connected</returns>
    public static bool operator ^(EdgeTemp<T, TCustom> edge, TCustom edgeCustom)
    {
        if (edge.Cost == int.MinValue)
        {
            throw new InvalidOperationException("Cost of edge is not defined. Use >> operator to define it.");
        }

        return edge.Graph.Connect(edge.NodeFrom, edge.NodeTo, edge.Cost, edgeCustom);
    }

    public uint NodeFrom { get; set; }
    public uint NodeTo { get; set; }
    public Graph<T, TCustom> Graph { get; set; }
    public int Cost { get; set; }
}
public interface IGraph<T, TEdgeCustom> where TEdgeCustom : IEquatable<TEdgeCustom>
{
    INode<T, TEdgeCustom> this[uint node] { get; }
}
public interface INode
{
    uint Key { get; set; }
}
public interface INode<T, TEdgeCustom> : INode, IEnumerable<Edge<T, TEdgeCustom>> where TEdgeCustom : IEquatable<TEdgeCustom>
{
    T Item { get; }
}
public class Node<T, TEdgeCustom> : INode<T, TEdgeCustom> where TEdgeCustom : IEquatable<TEdgeCustom>
{
    private readonly HashSet<Node<T, TEdgeCustom>> _parents = new HashSet<Node<T, TEdgeCustom>>();
    private Edge<T, TEdgeCustom>[] _edges;

    internal Node(uint key, T item, Graph<T, TEdgeCustom> graph)
    {
        Key = key;
        Item = item;
        _edges = new Edge<T, TEdgeCustom>[5];
        Graph = graph;
    }

    /// <summary>
    /// Connect node with node
    /// </summary>
    /// <param name="nodeFrom">Node from</param>
    /// <param name="nodeTo">Node to</param>
    /// <returns>Temporal edge</returns>
    public static EdgeTemp<T, TEdgeCustom> operator >>(Node<T, TEdgeCustom> nodeFrom, int nodeTo)
    {
        return new EdgeTemp<T, TEdgeCustom>(nodeFrom.Key, (uint)nodeTo, nodeFrom.Graph);
    }

    public uint Key { get; set; }

    public T Item { get; set; }

    public int EdgesCount { get; internal set; }

    public IEnumerable<Node<T, TEdgeCustom>> Parents
    {
        get
        {
            return _parents;
        }
    }

    /// <summary>
    /// Get custom info from node edges by node key
    /// </summary>
    /// <param name="nodeKey">Node key</param>
    /// <returns>TEdgeCustom</returns>
    public TEdgeCustom GetFirstEdgeCustom(uint nodeKey)
    {
        for (int i = 0; i < EdgesCount; i++)
        {
            ref Edge<T, TEdgeCustom> e = ref _edges[i];

            if (e.Node.Key == nodeKey)
            {
                return e.Item;
            }
        }

        throw new EdgeNotFoundException(nodeKey);
    }

    internal Graph<T, TEdgeCustom> Graph { get; set; }

    internal void EachEdge(Edge edge)
    {
        for (int i = 0; i < EdgesCount; i++)
        {
            ref Edge<T, TEdgeCustom> e = ref _edges[i];

            edge(e.Node.Key, e.Cost);
        }
    }

    internal void AddEdge(Edge<T, TEdgeCustom> edge)
    {
        if (_edges.Length == EdgesCount)
        {
            int newSize = _edges.Length;

            if (EdgesCount < NodeConstants.MaxSize)
            {
                newSize *= 2;
            }
            else
            {
                long bigSize = (long)(newSize * 1.5);

                newSize = bigSize < Int32.MaxValue ? (int)bigSize : Int32.MaxValue;
            }

            Array.Resize(ref _edges, newSize);
        }

        _edges[EdgesCount] = edge;
        EdgesCount++;
    }

    internal void AddParent(Node<T, TEdgeCustom> parent)
    {
        _parents.Add(parent);
    }

    public override int GetHashCode()
    {
        return Key.GetHashCode();
    }

    public IEnumerator<Edge<T, TEdgeCustom>> GetEnumerator()
    {
        for (int i = 0; i < EdgesCount; i++)
        {
            yield return _edges[i];
        }
    }

    public override bool Equals(object obj)
    {
        var node = obj as INode;

        return node?.Key == Key;
    }

    public override string ToString()
    {
        return $"[{Key}({Item?.ToString()})]";
    }

    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        throw new NotImplementedException();
    }
}
internal class NodeConstants
{
    public const int MaxSize = Int32.MaxValue / 4;
}
public struct Edge<T, TCustom> : IEquatable<Edge<T, TCustom>> where TCustom : IEquatable<TCustom>
{
    public Edge(INode<T, TCustom> node, int cost, TCustom custom)
    {
        Node = node;
        Cost = cost;
        Item = custom;
    }

    public INode<T, TCustom> Node { get; set; }

    public int Cost { get; set; }

    public TCustom Item { get; set; }

    public bool Equals(Edge<T, TCustom> other)
    {
        return Node.Key == other.Node.Key && Cost == other.Cost &&
                                                (EqualityComparer<TCustom>.Default.Equals(Item, default(TCustom)) &&
        EqualityComparer<TCustom>.Default.Equals(other.Item, default(TCustom)) ||
        !EqualityComparer<TCustom>.Default.Equals(Item, default(TCustom)) && !EqualityComparer<TCustom>.Default.Equals(other.Item, default(TCustom))
        && Item.Equals(other.Item));
    }

    public override int GetHashCode()
    {
        int hash = 13;
        hash = hash * 7 + (int)Cost;
        hash = hash * 7 + (int)Node.Key;
        return hash;
    }

    public override bool Equals(object obj)
    {
        var other = obj as Edge<T, TCustom>?;

        if (other == null)
            return false;

        return Equals(other.Value);
    }

}
public class EdgeNotFoundException : Exception
{
    internal EdgeNotFoundException(uint node)
        : base($"Edge with {node} node key doesn't exist.")
    {
    }
}
public class Graph : IDijkstraGraph, IPageRankGraph
{
    private readonly Dictionary<uint, HashSet<ReadonlyEdge>> _nodes = new Dictionary<uint, HashSet<ReadonlyEdge>>();
    private readonly Dictionary<uint, HashSet<uint>> _nodesParent = new Dictionary<uint, HashSet<uint>>();

    /// <summary>
    /// Connect node with node
    /// </summary>
    /// <param name="graph">Graph</param>
    /// <param name="node">Key of node</param>
    /// <returns>Temporary edge</returns>
    public static EdgeTemp operator >>(Graph graph, int node)
    {
        return new EdgeTemp(graph, (uint)node);
    }

    /// <summary>
    /// Add nodes to graph
    /// </summary>
    /// <param name="graph">Graph</param>
    /// <param name="numberOfNodes">Number of nodes</param>
    /// <returns></returns>
    public static Graph operator +(Graph graph, int numberOfNodes)
    {
        Enumerable
            .Range(0, numberOfNodes)
            .Each(_ => graph.AddNode());

        return graph;
    }

    /// <summary>
    /// Add node to graph
    /// </summary>
    /// <returns></returns>
    public uint AddNode()
    {
        uint key = (uint)(_nodes.Count + 1);
        _nodes.Add(key, new HashSet<ReadonlyEdge>());
        _nodesParent.Add(key, new HashSet<uint>());
        return key;
    }

    /// <summary>
    /// Connect node from to node to with cost
    /// (from)-[cost]->(to)
    /// </summary>
    /// <param name="from">Node from</param>
    /// <param name="to">Node to</param>
    /// <param name="cost">Cost of connection</param>
    /// <returns>True if two nodes exist</returns>
    public bool Connect(uint from, uint to, int cost)
    {
        if (!_nodes.ContainsKey(from) || !_nodes.ContainsKey(to))
            return false;

        _nodesParent[to].Add(from);
        _nodes[from].Add(new ReadonlyEdge(to, cost));

        return true;
    }

    /// <summary>
    /// Connect node from to node to
    /// (from)-[]->(to)
    /// </summary>
    /// <param name="from">Node from</param>
    /// <param name="to">Node to</param>
    /// <returns>True if two nodes exist</returns>
    public bool Connect(uint from, uint to)
    {
        return Connect(from, to, -1);
    }

    /// <summary>
    /// Get nodes with cost
    /// </summary>
    /// <param name="node"></param>
    public Action<Edge> this[uint node]
    {
        get
        {
            return e => _nodes[node].Each(n => e(n.Key, n.Cost));
        }
    }

    public IEnumerator<uint> GetEnumerator()
    {
        foreach (var node in _nodes)
        {
            yield return node.Key;
        }
    }

    public override string ToString()
    {
        return $"Simple::Graph({NodesCount})";
    }

    public int NodesCount
    {
        get
        {
            return _nodes.Count;
        }
    }

    public int EdgesCount(uint node)
    {
        return _nodes[node].Count;
    }

    public IEnumerable<uint> Parents(uint node)
    {
        return _nodesParent[node];
    }

    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        throw new NotImplementedException();
    }
}
internal struct ReadonlyEdge : IEquatable<ReadonlyEdge>
{
    public ReadonlyEdge(uint key, int cost)
    {
        Key = key;
        Cost = cost;
    }

    public uint Key { get; set; }

    public int Cost { get; set; }

    public bool Equals(ReadonlyEdge other)
    {
        return Key == other.Key && Cost == other.Cost;
    }

    public override bool Equals(object obj)
    {
        if (ReferenceEquals(null, obj)) return false;
        return obj is ReadonlyEdge other && Equals(other);
    }

    public override int GetHashCode()
    {
        unchecked
        {
            return ((int)Key * 397) ^ Cost;
        }
    }
}
public struct EdgeTemp
{
    internal EdgeTemp(Graph graph, uint nodeFrom)
        : this(graph, nodeFrom, uint.MaxValue)
    {
    }

    internal EdgeTemp(Graph graph, uint nodeFrom, uint nodeTo)
    {
        Graph = graph;
        NodeFrom = nodeFrom;
        NodeTo = nodeTo;
    }

    internal Graph Graph { get; set; }

    internal uint NodeFrom { get; set; }

    internal uint NodeTo { get; set; }

    /// <summary>
    /// Connect two nodes in graph
    /// </summary>
    /// <param name="edge">Node from</param>
    /// <param name="node">Node to</param>
    /// <returns>Temporary edge</returns>
    public static EdgeTemp operator >>(EdgeTemp edge, int node)
    {
        return new EdgeTemp(edge.Graph, edge.NodeFrom, (uint)node);
    }

    /// <summary>
    /// Create edge between two nodes
    /// </summary>
    /// <param name="edge">Temporary edge</param>
    /// <param name="cost">Connection cost</param>
    /// <returns>True if connected</returns>
    public static bool operator ^(EdgeTemp edge, int cost)
    {
        if (edge.NodeTo == uint.MaxValue)
        {
            throw new InvalidOperationException("Destination node is not defined. Use >> operator to define it.");
        }

        return edge.Graph.Connect(edge.NodeFrom, edge.NodeTo, cost);
    }
}
public struct PageRankResult
{
    private readonly Dictionary<uint, double> _pageRank;

    public PageRankResult(Dictionary<uint, double> pageRank)
    {
        _pageRank = pageRank;
    }

    public double this[uint node]
    {
        get
        {
            return _pageRank[node];
        }
    }
}
public interface IPageRankGraph : IEnumerable<uint>
{
    int NodesCount { get; }

    int EdgesCount(uint node);

    IEnumerable<uint> Parents(uint node);
}
public static class PageRankExtensions
{
    /// <summary>
    /// Calculate page rank for graph
    /// </summary>
    /// <param name="graph">Source graph</param>
    /// <param name="d">Damping factor</param>
    /// <returns>Calculated page rank</returns>
    public static PageRankResult PageRank(this IPageRankGraph graph, double d = 0.85)
    {
        var pageRank = new Dictionary<uint, double>();
        var pageRankNext = new Dictionary<uint, double>();

        double initPr = 1.0 / graph.NodesCount;

        // 1
        foreach (var node in graph)
        {
            pageRankNext[node] = (1 - d) / graph.NodesCount + d * graph.Parents(node).Sum(x => initPr / graph.EdgesCount(x));
        }

        // 2
        foreach (var node in graph)
        {
            pageRank[node] = (1 - d) / graph.NodesCount + d * graph.Parents(node).Sum(x => pageRankNext[x] / graph.EdgesCount(x));
        }

        return new PageRankResult(pageRank);
    }
}
public interface IDijkstraGraph
{
    Action<Edge> this[uint node] { get; }
}
internal class NodeComparer : IComparer<uint>
{
    private readonly IDictionary<uint, int> _distance;

    public NodeComparer(IDictionary<uint, int> distance)
    {
        _distance = distance;
    }

    public int Compare(uint x, uint y)
    {
        int xDistance = _distance.ContainsKey(x) ? _distance[x] : Int32.MaxValue;
        int yDistance = _distance.ContainsKey(y) ? _distance[y] : Int32.MaxValue;

        int comparer = xDistance.CompareTo(yDistance);

        if (comparer == 0)
        {
            return x.CompareTo(y);
        }

        return comparer;
    }
}
public struct ShortestPathResult
{
    private readonly IDictionary<uint, uint> _path;

    internal ShortestPathResult(uint @from, uint to, int distance, IDictionary<uint, uint> path)
    {
        FromNode = @from;
        ToNode = to;
        Distance = distance;
        _path = path;
    }

    internal ShortestPathResult(uint @from, uint to) : this(@from, @to, Int32.MaxValue, null) { }

    public int Distance { get; set; }

    public uint FromNode { get; set; }

    public uint ToNode { get; set; }

    public bool IsFounded
    {
        get
        {
            return _path != null;
        }
    }

    public IEnumerable<uint> GetReversePath()
    {
        if (_path == null)
        {
            yield break;
        }

        uint result = ToNode;

        while (true)
        {
            yield return result;

            if (result == FromNode)
                break;

            result = _path[result];
        }
    }

    public IEnumerable<uint> GetPath()
    {
        return GetReversePath().Reverse();
    }

    public override string ToString()
    {
        return $"({FromNode})-[{Distance}]->({ToNode})";
    }
}
internal static class SortedSetExtensions
{
    public static T Deque<T>(this SortedSet<T> set)
    {
        T item = set.First();

        set.Remove(item);

        return item;
    }
}
internal static class Dijkstra
{
    private static int Distance(uint key, Dictionary<uint, int> distance)
    {
        return distance.ContainsKey(key) ? distance[key] : Int32.MaxValue;
    }

    public static ShortestPathResult GetShortestPath(IDijkstraGraph graph, uint from, uint to, int depth)
    {
        var path = new Dictionary<uint, uint>();
        var distance = new Dictionary<uint, int> { [from] = 0 };
        var d = new Dictionary<uint, int> { [from] = 0 };
        var q = new SortedSet<uint>(new[] { from }, new NodeComparer(distance));
        var current = new HashSet<uint>();        

        do
        {
            uint u = q.Deque();

            if (u == to)
            {
                return new ShortestPathResult(from, to, distance[u], path);
            }

            current.Remove(u);

            if (depth == d[u])
            {
                continue;
            }

            graph[u]((node, cost) =>
            {
                if (Distance(node, distance) > Distance(u, distance) + cost)
                {
                    if (current.Contains(node))
                    {
                        q.Remove(node);
                    }

                    distance[node] = Distance(u, distance) + cost;
                    q.Add(node);
                    current.Add(node);
                    path[node] = u;
                    d[node] = d[u] + 1;
                }
            });

        } while (q.Count > 0 && depth > 0);

        return new ShortestPathResult(from, to);
    }
}
public delegate void Edge(uint node, int cost);
public static class DijkstraExtensions
{
    /// <summary>
    /// Get path from @from to @to
    /// </summary>
    /// <param name="graph">Source graph</param>
    /// <param name="from">Start node</param>
    /// <param name="to">End node</param>
    /// <returns>Value with path</returns>
    public static ShortestPathResult RunDijkstra(this IDijkstraGraph graph, uint from, uint to)
        => RunDijkstra(graph, from, to, Int32.MaxValue);

    /// <summary>
    /// Get path from @from to @to
    /// </summary>
    /// <param name="graph">Source graph</param>
    /// <param name="from">Start node</param>
    /// <param name="to">End node</param>
    /// <param name="depth">Depth of path</param>
    /// <returns>Value with path</returns>
    public static ShortestPathResult RunDijkstra(this IDijkstraGraph graph, uint from, uint to, int depth)
    {
        return Dijkstra.GetShortestPath(graph, from, to, depth);
    }
}
#endregion

internal class Program
{
    #region myprogram #
    private class Inputs
    {
        public string[] EValues { get; set; }
        public string[] E1Values { get; set; }
        public string[] E2Values { get; set; }
        public string[] T1Values { get; set; }
        public string[] T2Values { get; set; }
        public string[] XValues { get; set; }
    };

    private class DijkstraItemBase
    {
        public string Name { get; set; }
        public int Value { get; set; }
    }

    private class DijkstraItem : DijkstraItemBase
    {
        public DijkstraItem(DijkstraItemBase dijkstraItemBase)
        {
            Name = dijkstraItemBase.Name;
            Value = dijkstraItemBase.Value;
        }
        public uint DijkstraIndex { get; set; }
    }

    private static void Main(string[] args)
    {
        string line = Console.ReadLine();

        while (!string.IsNullOrEmpty(line))
        {
            var graph = new Graph<DijkstraItemBase, string>();

            var n = Int32.Parse(line);
            var inputs = ReadInputs(n);

            var indexRoot = graph.AddNode(new DijkstraItemBase
            {
                Name = "Root",
                Value = 0
            });

            var (e1Index, e2Index) = CreateAndConnectEValues(graph, inputs.EValues, indexRoot);

            var e1Items = ConnectETreeValues(graph, n, inputs.E1Values, e1Index, "1");
            var e2Items = ConnectETreeValues(graph, n, inputs.E2Values, e2Index, "2");

            ConnectTValues(graph, n, inputs, e1Items, e2Items);

            var (x1Index, x2Index) = CreateAndConnectXValues(graph, inputs, e1Items, e2Items);

            var indexEnd = ConnectLastNode(graph, x1Index, x2Index);

            var shortestPath = graph.RunDijkstra(indexRoot, indexEnd);

            Console.WriteLine(shortestPath.Distance);

            line = Console.ReadLine();
        }
    }

    private static Inputs ReadInputs(int n)
    {
        var eValues = Console.ReadLine().Split(' ');

        var e1Values = Console.ReadLine().Split(' ');
        var e2Values = Console.ReadLine().Split(' ');

        var t1Values = n == 1 ? null : Console.ReadLine().Split(' ');
        var t2Values = n == 1 ? null : Console.ReadLine().Split(' ');

        // Obs. Quando n é 1 a linha do t vem vazia
        String aux = Console.ReadLine();
        if (n == 1)
        {
            while (string.IsNullOrEmpty(aux))
                aux = Console.ReadLine();
        }

        var xValues = aux.Split(' ');

        return new Inputs
        {
            EValues = eValues,
            E1Values = e1Values,
            E2Values = e2Values,
            T1Values = t1Values,
            T2Values = t2Values,
            XValues = xValues
        };
    }

    private static List<DijkstraItem> ConnectETreeValues(
        Graph<DijkstraItemBase, string> graph, int n, string[] eValues, uint indexETree, string prefix)
    {
        List<DijkstraItem> dijkstraItems = new List<DijkstraItem>();

        uint prevNodeIndex = indexETree;
        for (var j = 0; j < n; j++)
        {
            var newNodeValue = Int32.Parse(eValues[j]);

            var dijkstraItemBase = new DijkstraItemBase
            {
                Name = $"A{prefix},{j + 1}",
                Value = newNodeValue
            };

            var idNewNode = graph.AddNode(dijkstraItemBase);

            graph.Connect(prevNodeIndex, idNewNode, newNodeValue, "");

            prevNodeIndex = idNewNode;

            dijkstraItems.Add(new DijkstraItem(dijkstraItemBase)
            {
                DijkstraIndex = idNewNode
            });
        }

        return dijkstraItems;
    }

    private static (uint e1Index, uint e2Index) CreateAndConnectEValues(Graph<DijkstraItemBase, string> graph, string[] EValues, uint indexRoot)
    {
        var E1Value = Int32.Parse(EValues[0]);
        var E2Value = Int32.Parse(EValues[1]);

        var e1Index = graph.AddNode(new DijkstraItemBase
        {
            Name = "E1",
            Value = E1Value
        });
        var e2Index = graph.AddNode(new DijkstraItemBase
        {
            Name = "E2",
            Value = E2Value
        });

        graph.Connect(indexRoot, e1Index, E1Value, "");
        graph.Connect(indexRoot, e2Index, E2Value, "");

        return (e1Index, e2Index);
    }

    private static uint ConnectLastNode(Graph<DijkstraItemBase, string> graph, uint x1Index, uint x2Index)
    {
        var lastNode = new DijkstraItemBase
        {
            Name = "End",
            Value = 0
        };

        var indexEnd = graph.AddNode(lastNode);

        graph.Connect(x1Index, indexEnd, 0, "");
        graph.Connect(x2Index, indexEnd, 0, "");

        return indexEnd;
    }

    private static (uint x1Index, uint x2Index) CreateAndConnectXValues(Graph<DijkstraItemBase, string> graph, Inputs inputs, List<DijkstraItem> e1Items, List<DijkstraItem> e2Items)
    {
        var x1Item = new DijkstraItemBase
        {
            Name = "X1",
            Value = Int32.Parse(inputs.XValues[0])
        };

        var x2Item = new DijkstraItemBase
        {
            Name = "X2",
            Value = Int32.Parse(inputs.XValues[1])
        };

        var x1Index = graph.AddNode(x1Item);
        var x2Index = graph.AddNode(x2Item);
        var lastE1 = e1Items.Last();
        var lastE2 = e2Items.Last();

        graph.Connect(lastE1.DijkstraIndex, x1Index, x1Item.Value, "");
        graph.Connect(lastE2.DijkstraIndex, x2Index, x2Item.Value, "");

        return (x1Index, x2Index);
    }

    private static void ConnectTValues(Graph<DijkstraItemBase, string> graph, int n, Inputs inputs, List<DijkstraItem> e1Items, List<DijkstraItem> e2Items)
    {
        // T1 connections
        for (var j = 0; j < n - 1; j++)
        {
            var newNodeValue = Int32.Parse(inputs.T1Values[j]);

            var newNode = new DijkstraItemBase
            {
                Name = $"T1,{j + 1}",
                Value = newNodeValue
            };

            var newNodeIndex = graph.AddNode(newNode);

            var e1Item = e1Items.ElementAt(j);
            var e2Item = e2Items.ElementAt(j + 1);

            graph.Connect(e1Item.DijkstraIndex, newNodeIndex, newNodeValue, "");
            graph.Connect(newNodeIndex, e2Item.DijkstraIndex, e2Item.Value, "");
        }

        // T2 connections
        for (var j = 0; j < n - 1; j++)
        {
            var newNodeValue = Int32.Parse(inputs.T2Values[j]);

            var newNode = new DijkstraItemBase
            {
                Name = $"T2,{j + 1}",
                Value = newNodeValue
            };

            var newNodeIndex = graph.AddNode(newNode);

            var e2Item = e2Items.ElementAt(j);
            var e1Item = e1Items.ElementAt(j + 1);

            graph.Connect(e2Item.DijkstraIndex, newNodeIndex, newNodeValue, "");
            graph.Connect(newNodeIndex, e1Item.DijkstraIndex, e1Item.Value, "");
        }
    }

    #endregion
}